class TamanhoPao {
    constructor(centimetros) {
        this.centimetros = centimetros;
    }
}

class Pao {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Proteina {
    constructor(preferencia) {
        this.preferencia = preferencia;
    }
}

class Queijo {
    constructor(tipoQ) {
        this.tipoQ = tipoQ;
    }
}

class Calor {
    constructor(temperatura) {
        this.temperatura = temperatura;
    }
}

class Salada {
    constructor(jeitosalada) {
        this.jeitosalada = jeitosalada;
    }
}

class Molhos {
    constructor(sabores) {
        this.sabores = sabores;
    }
}

class Temperos {
    constructor(paraSalada) {
        this.paraSalada = paraSalada;
    }
}

class SubwayBuilder {
    constructor() {
        this.tamanhoPao = null;
        this.pao = null;
        this.proteina = null;
        this.queijo = null;
        this.calor = null;
        this.salada = null;
        this.molhos = null;
        this.temperos = null;
    }

    addtamanhoPao(centimetros) {
        this.tamanhoPao = new TamanhoPao(centimetros);
        return this;
    }

    addPao(tipo) {
        this.pao = new Pao(tipo);
        return this;
    }

    addProteina(preferencia) {
        this.proteina = new Proteina(preferencia); 
        return this;
    }

    addQueijo(tipoQ) {
        this.queijo = new Queijo(tipoQ);
        return this;
    }

    addCalor(temperatura) {
        this.calor = new Calor(temperatura);
        return this;
    }

    addsalada(jeitosalada) {
        this.salada = new Salada(jeitosalada);
        return this;
    }

    addmolhos(sabores) {
        this.molhos = new Molhos(sabores);
        return this; 
    }

    addtemperos(paraSalada) {
        this.temperos = new Temperos(paraSalada);
        return this;
    }

    construir() {
        return new Subway(this.tamanhoPao,this.pao,  this.proteina,  this.queijo, this.calor, this.salada, this.molhos, this.temperos );
    }
}

class Subway {
    constructor(tamanhoPao, pao, proteina, queijo, calor, salada, molhos, temperos) {
        this.tamanhoPao = tamanhoPao;
        this.pao = pao;
        this.proteina = proteina;
        this.queijo = queijo;
        this.calor = calor;
        this.salada = salada;
        this.molhos = molhos; 
        this.temperos = temperos;
    }

        mostrarDetalhes(){
        console.log(`
            ----------------------
                PEDIDO SUBWAY  
            ----------------------

            \t Tamanho do Pão:  \t ${this.tamanhoPao.centimetros}
            \t Pão:             \t${this.pao.tipo}
            \t Proteina:        \t${this.proteina.preferencia}
            \t Queijo:          \t${this.queijo.tipoQ})
            \t Calor:           \t${this.calor.temperatura}
            \t Salada:        \t${this.salada.jeitosalada}
            \t Molhos:          \t${this.molhos.sabores}
            \t Temperos:        \t${this.temperos.paraSalada}
            --------------------------------------------------------`);
    }
}

const builder = new SubwayBuilder();

const subwayPadrao = builder
    .addtamanhoPao  ('____')
    .addPao         ('____')
    .addProteina    ('____')
    .addQueijo      ('____')
    .addCalor       ('____')
    .addsalada    ('____')
    .addmolhos      ('____')
    .addtemperos    ('____')

const Subway1 = builder
    .addtamanhoPao("15cm")
    .addPao("italiano")
    .addProteina("frango defumado")
    .addQueijo("prato")
    .addCalor("frio")
    .addsalada("alface, cebolaroxa")
    .addmolhos("chipotle, barbecue, supreme")
    .addtemperos("azeite, sal")
    .construir();

const Subway2 = builder
    .addtamanhoPao("30cm")
    .addPao("parmessão")
    .addProteina("carne")
    .addQueijo("chedar")
    .addCalor("esquentar")
    .addsalada("alface, tomate, picles")
    .addmolhos("ketchup, barbecue, maionese verde")
    .addtemperos("sal")
    .construir();

Subway1.mostrarDetalhes();
Subway2.mostrarDetalhes();
