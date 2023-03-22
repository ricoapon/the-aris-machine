import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDocumentationComponent } from './language-documentation.component';

describe('LanguageDocumentationComponent', () => {
  let component: LanguageDocumentationComponent;
  let fixture: ComponentFixture<LanguageDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
