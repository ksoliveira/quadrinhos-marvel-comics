import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { Comic } from './objects/comic';
import { ComicsService } from './comics.service';
import { debounce } from 'rxjs/internal/operators';
import { CharactersService } from '../characters/characters.service';
import { Character } from '../characters/character';
import { FormBuilder, FormGroup } from '@angular/forms';
import { convertCompilerOptionsFromJson } from 'typescript';

@Component({
    selector: 'app-comics', 
    templateUrl: './comics.component.html',
    styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
    comics$: Observable<Comic[]>;
    characters$: Observable<Character[]>;

    itemsPerPage = 10;
    totalElements: number;
    page = 0;

    private _loading = new BehaviorSubject<boolean>(false);
    public readonly loading$ = this._loading.asObservable();

    private _loadingCharacter = new BehaviorSubject<boolean>(false);
    public readonly loadingCharacter$ = this._loadingCharacter.asObservable();

    private _listedByCharacterId = new BehaviorSubject<boolean>(false);
    public readonly listedByCharacterId$ = this._listedByCharacterId.asObservable();


    private _fieldChanged = new BehaviorSubject<boolean>(false);
    public readonly fieldChanged$ = this._fieldChanged = new BehaviorSubject<boolean>(false);



    defaultSearchForm: FormGroup;

    constructor(
        private serviceComics: ComicsService,
        private serviceCharacters: CharactersService,
        private fb: FormBuilder
    ) {
        this.fieldChanged$.pipe(debounce(() => interval(600)))
            .subscribe(() => {
                this.showCharactersLoading();
                this.findCharachter();
            });
    }

    ngOnInit(): void {
        this.initDefaultSearchForm();

        this.findAll();
    }

    private initDefaultSearchForm() {
        this.defaultSearchForm = this.fb.group({
            name: ['']
        });
    }

    findCharachter(): void {
        this.showCharactersLoading();
        const characterName = this.defaultSearchForm.get('name').value;

        this.serviceCharacters.findByName( characterName )
            .subscribe(
                success => {
                    this.characters$ = of(success);
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.hideCharactersLoading();
                }
            );
    }

    onChange() {
        this.fieldChanged$.next(true);
    }

    loadComicsByCharacter(characterId: number) {
        this.findComicsByCharacterId(characterId);
        this.listedByCharacterId();
        this.characters$ = of();
    }

    findComicsByCharacterId(characterId: number): void {
        this.showComicsLoading();
        this.serviceCharacters.findComicsByCharacterId(characterId)
            .subscribe(
                success => {
                    this.comics$ = of(success);
                    this.totalElements = this.  serviceComics.getTotalElements();
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.hideComicsLoading();
                }
            );
    }


    findAll(): void {
        this.showComicsLoading();
        this.serviceComics.findAll(this.page, this.itemsPerPage)
            .subscribe(
                success => {
                    this.comics$ = of(success);
                    this.totalElements = this.serviceComics.getTotalElements();
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.hideComicsLoading();
                }
            );
    }

    showComicsLoading() {
        this._loading.next(true);
    }

    hideComicsLoading() {
        this._loading.next(false);
    }

    showCharactersLoading() {
        this._loadingCharacter.next(true);
    }

    hideCharactersLoading() {
        this._loadingCharacter.next(false);
    }

    listedByCharacterId() {
        this._listedByCharacterId.next(true);
    }

    isNotListedByCharacterId() {
        this._listedByCharacterId.next(false);
    }
    
    loadPage(page: number) {
        this.page = page;
        this.findAll();
    }
}
