import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListDataComponent } from './pokemon-list-data.component';

describe('PokemonListDataComponent', () => {
  let component: PokemonListDataComponent;
  let fixture: ComponentFixture<PokemonListDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
