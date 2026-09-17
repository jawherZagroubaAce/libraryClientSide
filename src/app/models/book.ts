export interface Book { id:string; title:string; isbn:string; publishedYear:number; stock:number; price:number; author:{name:string}; categories:{name:string}[] }
export interface BookRequest { title:string; isbn:string; publishedYear:number; stock:number; price:number; author:string; categories:string[] }
