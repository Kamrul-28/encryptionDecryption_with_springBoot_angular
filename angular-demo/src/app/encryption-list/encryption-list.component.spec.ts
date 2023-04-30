import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionListComponent } from './encryption-list.component';

describe('EncryptionListComponent', () => {
  let component: EncryptionListComponent;
  let fixture: ComponentFixture<EncryptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
