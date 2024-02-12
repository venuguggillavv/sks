import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSocialMenuComponent } from './top-social-menu.component';

describe('TopSocialMenuComponent', () => {
  let component: TopSocialMenuComponent;
  let fixture: ComponentFixture<TopSocialMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSocialMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSocialMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
