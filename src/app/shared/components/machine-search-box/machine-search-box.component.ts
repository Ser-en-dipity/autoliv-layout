import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Machine, MachinesService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-machine-search-box',
  templateUrl: './machine-search-box.component.html',
  styleUrls: ['./machine-search-box.component.less']
})
export class MachineSearchBoxComponent implements OnInit {
  @Input()
  public preSelectedId?: string;

  @Output()
  public machine: EventEmitter<Machine> = new EventEmitter();



  public searchChanges$ = new BehaviorSubject('');
  public options: Array<Machine> = [];
  public isLoading = false;
  public selectedMachine?: Machine;

  constructor(private machineService: MachinesService, private msg: NzMessageService) {

    this.searchChanges$
      .asObservable()
      .pipe(
        debounceTime(42),
        switchMap((qstr) => this.machineService.apiMachinesSearchPost({ query: qstr }))
      )
      .subscribe(
        {
          next: (x) => {
            this.options = x;
            this.isLoading = false;

            if (this.preSelectedId && this.preSelectedId.length > 0) {
              this.selectedMachine = this.options.find(x => x.id && this.preSelectedId === x.id);
              this.machine.emit(this.selectedMachine);
            }

          },
          error: (err) => {
            this.msg.error(err.message);
          }
        }
      );
  }

  ngOnInit(): void { }

  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }

  public onModelChange(opt: Machine): void {
    this.machine.emit(opt);
  }
}
