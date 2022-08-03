import { Component, OnInit } from '@angular/core';
import { LivrosService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  livros: any;
  livroService: typeof LivrosService;


  constructor(private livrosService: LivrosService) {
    this.livroService = LivrosService;
   }

  ngOnInit(): void {
    this.livros = this.livrosService.getLivro().subscribe((retorno =>{
      this.livros = retorno;
      console.log(this.livros);
    }))
  }

}
