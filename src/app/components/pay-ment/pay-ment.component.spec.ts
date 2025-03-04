import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMentComponent } from './pay-ment.component';

describe('PayMentComponent', () => {
  let component: PayMentComponent;
  let fixture: ComponentFixture<PayMentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayMentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayMentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
