/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompnameComponent } from './compname.component';

describe('CompnameComponent', () => {
  let component: CompnameComponent;
  let fixture: ComponentFixture<CompnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
