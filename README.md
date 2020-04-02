# Stocku API

Rotas de Estabelecimentos:

Criar estabelecimento (POST): '/store',
  Campos:
    STRING: "name",
    STRING: "username",
    STRING: "password;
  
Listar todos estabelecimentos (GET): '/store',
  No Body;
  
Listar único estabelecimento (GET): '/store/id',
  No Body;

Editar estabelecimento (PUT): '/store/id',
  Campos:
    STRING: "name",
    STRING: "username",
    STRING: "password;

Deletar estabelecimento (DELETE): '/store/id',
  No Body;
  
  
Rotas de Produtos:

Criar produto (POST): '/product',
  Campos:
    STRING: "name",
    STRING: "description",
    NUMBER: "cost",
    NUMBER: "price";
  
Listar todos produtos do estabelecimento logado (GET): '/product',
  No Body;
  
Listar único produto do estabelecimento logado (GET): '/product/id',
  No Body;

Editar produto do estabelecimento logado (PUT): '/product/id',
  Campos:
    STRING: "name",
    STRING: "description",
    NUMBER: "cost",
    NUMBER: "price";
    
Deletar produto do estabelecimento logado (DELETE): '/product/id',
  No Body;
 
 
Rotas de Serviços:

Criar serviço (POST): '/service',
  Campos:
    STRING: "name",
    STRING: "description",
    NUMBER: "price";
  
Listar todos serviços do estabelecimento logado (GET): '/service',
  No Body;
  
Listar único serviço do estabelecimento logado (GET): '/service/id',
  No Body;

Editar serviço do estabelecimento logado (PUT): '/service/id',
  Campos:
    STRING: "name",
    STRING: "description",
    NUMBER: "price";
    
Deletar serviço do estabelecimento logado (DELETE): '/service/id',
  No Body;
