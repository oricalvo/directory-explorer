import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryExplorerComponent } from './directory-explorer.component';

describe('DirectoryExplorerComponent', () => {
  let component: DirectoryExplorerComponent;
  let fixture: ComponentFixture<DirectoryExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
