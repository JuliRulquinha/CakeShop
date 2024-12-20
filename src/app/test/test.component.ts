import { Component, Input } from '@angular/core';

@Component({
  selector: 'groceries-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() pessoas: IPessoa[] = [];
}

export interface IPessoa{
  nome: string;
  idade: number;
  cpf: string;
}
