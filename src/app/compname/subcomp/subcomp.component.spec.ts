/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubcompComponent } from './subcomp.component';

describe('SubcompComponent', () => {
  let component: SubcompComponent;
  let fixture: ComponentFixture<SubcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
