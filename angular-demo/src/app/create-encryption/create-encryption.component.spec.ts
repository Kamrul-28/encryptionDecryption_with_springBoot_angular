import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEncryptionComponent } from './create-encryption.component';

describe('CreateEncryptionComponent', () => {
  let component: CreateEncryptionComponent;
  let fixture: ComponentFixture<CreateEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEncryptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
