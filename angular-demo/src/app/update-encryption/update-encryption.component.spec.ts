import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEncryptionComponent } from './update-encryption.component';

describe('UpdateEncryptionComponent', () => {
  let component: UpdateEncryptionComponent;
  let fixture: ComponentFixture<UpdateEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEncryptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
