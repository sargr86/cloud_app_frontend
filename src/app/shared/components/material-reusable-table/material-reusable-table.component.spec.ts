import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialReusableTableComponent } from './material-reusable-table.component';

describe('MaterialReusableTableComponent', () => {
  let component: MaterialReusableTableComponent;
  let fixture: ComponentFixture<MaterialReusableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialReusableTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialReusableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
