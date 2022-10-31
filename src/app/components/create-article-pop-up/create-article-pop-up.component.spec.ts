import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticlePopUpComponent } from './create-article-pop-up.component';

describe('CreateArticlePopUpComponent', () => {
  let component: CreateArticlePopUpComponent;
  let fixture: ComponentFixture<CreateArticlePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticlePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticlePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
