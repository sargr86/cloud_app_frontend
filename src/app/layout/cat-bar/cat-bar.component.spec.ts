import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBarComponent } from './cat-bar.component';

describe('CatBarComponent', () => {
  let component: CatBarComponent;
  let fixture: ComponentFixture<CatBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
