// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Dados brutos da votação
    const rawData = `Nome;Partido;UF;Voto 1º Turno;Voto 2º Turno
AJ Albuquerque;PP;CE;Sim;Sim
Acácio Favacho;MDB;AP;Sim;Sim
Adail Filho;Republicanos;AM;Sim;Sim
Adilson Barroso;PL;SP;Sim;Sim
Adolfo Viana;PSDB;BA;Sim;Sim
Adriana Ventura;Novo;SP;Não;Não
Adriano do Baldy;PP;GO;Sim;Sim
Aécio Neves;PSDB;MG;Não;Não
Afonso Hamm;PP;RS;Sim;Sim
Afonso Motta;PDT;RS;Não;Ausente
Aguinaldo Ribeiro;PP;PB;Sim;Sim
Airton Faleiro;PT;PA;Sim;Não
Alberto Fraga;PL;DF;Sim;Sim
Albuquerque;Republicanos;RR;Sim;Sim
Alceu Moreira;MDB;RS;Sim;Sim
Alencar Santana;PT;SP;Não;Não
Alex Manente;Cidadania;SP;Sim;Sim
Alex Santana;Republicanos;BA;Abstenção;Ausente
Alexandre Guimarãe;MDB;TO;Sim;Sim
Alfredinho;PT;SP;Sim;Sim
Alfredo Gaspar;União;AL;Ausente;Ausente
Alice Portugal;PCdoB;BA;Não;Não
Aliel Machado;PV;PR;Sim;Sim
Aline Gurgel;Republicanos;AP;Sim;Sim
Allan Garcês;PP;MA;Sim;Sim
Altineu Côrtes;PL;RJ;Sim;Sim
Aluisio Mendes;Republicanos;MA;Sim;Sim
Amanda Gentil;PP;MA;Sim;Sim
Amaro Neto;Republicanos;ES;Sim;Sim
Amom Mandel;Cidadania;AM;Não;Não
Ana Paula Leão;PP;MG;Sim;Sim
Ana Paula Lima;PT;SC;Não;Não
Ana Pimentel;PT;MG;Não;Não
André Abdon;PP;AP;Sim;Sim
André Fernandes;PL;CE;Sim;Sim
André Ferreira;PL;PE;Sim;Sim
André Figueiredo;PDT;CE;Sim;Sim
Andreia Siqueira;MDB;PA;Sim;Sim
Antônia Lúcia;Republicanos;AC;Sim;Sim
Antonio Andrade;Republicanos;TO;Sim;Sim
Antonio Brito;PSD;BA;Não;Não
Antonio Carlos R.;PL;SP;Sim;Sim
Antônio Doido;MDB;PA;Sim;Sim
Any Ortiz;Cidadania;RS;Sim;Sim
Arlindo Chinaglia;PT;SP;Não;Não
Arnaldo Jardim;Cidadania;SP;Sim;Sim
Arthur Lira;PP;AL;Sim;Sim
Arthur O. Maia;União;BA;Sim;Sim
Átila Lins;PSD;AM;Não;Não
Átila Lira;PP;PI;Sim;Sim
Augusto Coutinho;Republicanos;PE;Sim;Sim
Aureo Ribeiro;Solidariedade;RJ;Sim;Sim
Bacelar;PV;BA;Sim;Sim
Baleia Rossi;MDB;SP;Não;Não
Bandeira de Mello;PSB;RJ;Não;Não
Bebeto;PP;RJ;Sim;Sim
Benedita da Silva;PT;RJ;Não;Não
Benes Leocádio;União;RN;Sim;Sim
Beto Pereira;PSDB;MS;Sim;Sim
Beto Richa;PSDB;PR;Sim;Sim
Bia Kicis;PL;DF;Sim;Sim
Bibo Nunes;PL;RS;Sim;Sim
Bohn Gass;PT;RS;Não;Não
Bruno Farias;Avante;MG;Sim;Sim
Bruno Ganem;Podemos;SP;Sim;Sim
Caio Vianna;PSD;RJ;Não;Não
Camila Jara;PT;MS;Ausente;Ausente
Cap. Alberto Neto;PL;AM;Sim;Sim
Capitão Alden;PL;BA;Sim;Sim
Capitão Augusto;PL;SP;Ausente;Ausente
Carla Dickson;União;RN;Sim;Sim
Carlos Gaguim;União;TO;Sim;Sim
Carlos Jordy;PL;RJ;Sim;Sim
Carlos Sampaio;PSD;SP;Não;Não
Carlos Veras;PT;PE;Não;Não
Carlos Zarattini;PT;SP;Não;Não
Carol Dartora;PT;PR;Não;Ausente
Caroline de Toni;PL;SC;Sim;Sim
Castro Neto;PSD;PI;Sim;Sim
Cb Gilberto Silva;PL;PB;Sim;Sim
Cel. Chrisóstomo;PL;RO;Sim;Sim
Célia Xakriabá;PSOL;MG;Não;Não
Célio Silveira;MDB;GO;Sim;Sim
Célio Studart;PSD;CE;Não;Não
Celso Russomanno;Republicanos;SP;Sim;Sim
Cezinha Madureira;PSD;SP;Sim;Sim
Charles Fernandes;PSD;BA;Não;Não
Chico Alencar;PSOL;RJ;Não;Não
Chris Tonietto;PL;RJ;Sim;Sim
Clarissa Tércio;PP;PE;Sim;Sim
Claudio Cajado;PP;BA;Sim;Sim
Cleber Verde;MDB;MA;Sim;Sim
Clodoaldo Magalhãe;PV;PE;Não;Não
Cobalchini;MDB;SC;Sim;Sim
Coronel Assis;União;MT;Sim;Sim
Coronel Fernanda;PL;MT;Sim;Sim
Coronel Meira;PL;PE;Sim;Sim
Coronel Ulysses;União;AC;Sim;Sim
Covatti Filho;PP;RS;Sim;Sim
Cristiane Lopes;União;RO;Não;Não
Da Vitoria;PP;ES;Sim;Sim
Dagoberto Nogueira;PSDB;MS;Ausente;Ausente
Daiana Santos;PCdoB;RS;Não;Não
Dal Barreto;União;BA;Sim;Sim
Damião Feliciano;União;PB;Sim;Sim
Dandara;PT;MG;Não;Ausente
Dani Cunha;União;RJ;Sim;Sim
Daniel Agrobom;PL;GO;Sim;Sim
Daniel Almeida;PCdoB;BA;Não;Não
Daniel Barbosa;PP;AL;Não;Não
Daniel Freitas;PL;SC;Sim;Sim
Daniel Trzeciak;PSDB;RS;Não;Não
Daniela Reinehr;PL;SC;Sim;Sim
Daniela Waguinho;União;RJ;Sim;Não
Danilo Forte;União;CE;Sim;Sim
Danrlei;PSD;RS;Sim;Sim
David Soares;União;SP;Sim;Sim
Dayany Bittencourt;União;CE;Sim;Sim
Def. Stélio Dener;Republicanos;RR;Sim;Sim
Del. Adriana A.;PT;GO;Não;Não
Del. Bruno Lima;PP;SP;Não;Não
Del. Éder Mauro;PL;PA;Sim;Sim
Del. Fabio Costa;PP;AL;Sim;Sim
Del. Matheus L.;União;PR;Sim;Sim
Delegada Ione;Avante;MG;Sim;Sim
Delegada Katarina;PSD;SE;Não;Não
Delegado Bilynskyj;PL;SP;Sim;Sim
Delegado Caveira;PL;PA;Sim;Sim
Delegado Marcelo;União;MG;Sim;Sim
Delegado Palumbo;MDB;SP;Não;Não
Delegado Ramagem;PL;RJ;Sim;Sim
Delegado da Cunha;PP;SP;Sim;Sim
Denise Pessôa;PT;RS;Não;Não
Detinha;PL;MA;Sim;Sim
Diego Andrade;PSD;MG;Sim;Sim
Diego Coronel;PSD;BA;Sim;Sim
Diego Garcia;Republicanos;PR;Sim;Sim
Dilceu Sperafico;PP;PR;Sim;Sim
Dilvanda Faro;PT;PA;Sim;Sim
Dimas Fabiano;PP;MG;Sim;Sim
Dimas Gadelha;PT;RJ;Não;Não
Domingos Neto;PSD;CE;Ausente;Ausente
Domingos Sávio;PL;MG;Sim;Sim
Dorinaldo Malafaia;PDT;AP;Não;Não
Douglas Viegas;União;SP;Não;Não
Doutor Luizinho;PP;RJ;Sim;Sim
Dr Fernando Máximo;União;RO;Sim;Sim
Dr Victor Linhalis;Podemos;ES;Sim;Sim
Dr. Francisco;PT;PI;Sim;Sim
Dr. Frederico;PRD;MG;Sim;Sim
Dr. Ismael Alexand;PSD;GO;Sim;Sim
Dr. Jaziel;PL;CE;Sim;Sim
Dr. Luiz Ovando;PP;MS;Sim;Sim
Dr.Zacharias Calil;União;GO;Sim;Sim
Dra. Alessandra H.;MDB;PA;Sim;Sim
Duarte Jr.;PSB;MA;Não;Não
Duda Ramos;MDB;RR;Sim;Sim
Duda Salabert;PDT;MG;Não;Não
Eduardo Velloso;União;AC;Sim;Sim
Eduardo da Fonte;PP;PE;Sim;Sim
EduardoBolsonaro;PL;SP;Ausente;Ausente
Elcione Barbalho;MDB;PA;Ausente;Ausente
Eli Borges;PL;TO;Sim;Sim
Elmar Nascimento;União;BA;Sim;Sim
Ely Santos;Republicanos;SP;Sim;Sim
Emanuel Pinheiro N;MDB;MT;Não;Não
Emidinho Madeira;PL;MG;Sim;Ausente
Enf. Ana Paula;Podemos;CE;Sim;Sim
Enfermeira Rejane;PCdoB;RJ;Não;Não
Eriberto Medeiros;PSB;PE;Sim;Sim
Erika Hilton;PSOL;SP;Não;Não
Erika Kokay;PT;DF;Não;Não
Eros Biondini;PL;MG;Sim;Sim
Euclydes Pettersen;Republicanos;MG;Sim;Sim
Evair de Melo;PP;ES;Sim;Sim
Fábio Macedo;Podemos;MA;Sim;Sim
Fabio Reis;PSD;SE;Não;Não
Fabio Schiochet;União;SC;Sim;Sim
Fábio Teruel;MDB;SP;Sim;Sim
Fausto Pinato;PP;SP;Sim;Sim
Fausto Santos Jr.;União;AM;Sim;Sim
Felipe Becari;União;SP;Sim;Sim
Felipe Carreras;PSB;PE;Sim;Sim
Felipe Francischin;União;PR;Sim;Sim
Félix Mendonça Jr;PDT;BA;Sim;Sim
Fernanda Pessôa;União;CE;Sim;Sim
FernandaMelchionna;PSOL;RS;Não;Não
Fernando Coelho;União;PE;Sim;Sim
Fernando Mineiro;PT;RN;Não;Não
Fernando Monteiro;Republicanos;PE;Sim;Sim
Fernando Rodolfo;PL;PE;Sim;Sim
Filipe Barros;PL;PR;Sim;Sim
Filipe Martins;PL;TO;Sim;Sim
Flávia Morais;PDT;GO;Não;Não
Flávio Nogueira;PT;PI;Sim;Sim
Florentino Neto;PT;PI;Sim;Sim
Franciane Bayer;Republicanos;RS;Sim;Sim
Fred Costa;PRD;MG;Sim;Sim
Fred Linhares;Republicanos;DF;Sim;Sim
Gabriel Mota;Republicanos;RR;Sim;Sim
Gabriel Nunes;PSD;BA;Sim;Sim
General Girão;PL;RN;Sim;Sim
General Pazuello;PL;RJ;Sim;Sim
Geovania de Sá;PSDB;SC;Sim;Sim
Geraldo Mendes;União;PR;Sim;Sim
Geraldo Resende;PSDB;MS;Não;Não
Gervásio Maia;PSB;PB;Sim;Sim
Giacobo;PL;PR;Sim;Sim
Gilberto Abramo;Republicanos;MG;Sim;Sim
GilbertoNascimento;PSD;SP;Sim;Sim
Gilson Daniel;Podemos;ES;Não;Não
Gilson Marques;Novo;SC;Não;Não
Gilvan da Federal;PL;ES;Sim;Sim
Giovani Cherini;PL;RS;Sim;Sim
Gisela Simona;União;MT;Sim;Sim
Glauber Braga;PSOL;RJ;Não;Não
Greyce Elias;Avante;MG;Sim;Sim
Guilherme Boulos;PSOL;SP;Não;Não
Guilherme Uchoa;PSB;PE;Sim;Sim
Gustavo Gayer;PL;GO;Sim;Sim
Gustinho Ribeiro;Republicanos;SE;Sim;Sim
Gutemberg Reis;MDB;RJ;Sim;Sim
Heitor Schuch;PSB;RS;Ausente;Ausente
Helder Salomão;PT;ES;Não;Não
Helena Lima;MDB;RR;Sim;Sim
Helio Lopes;PL;RJ;Sim;Sim
Henderson Pinto;MDB;PA;Sim;Sim
Hercílio Diniz;MDB;MG;Sim;Sim
Hildo Rocha;MDB;MA;Sim;Sim
Hugo Leal;PSD;RJ;Sim;Sim
Hugo Motta;Republicanos;PB;Sim;Sim
Icaro de Valmir;PL;SE;Ausente;Ausente
Igor Timo;PSD;MG;Ausente;Sim
Ismael;PSD;SC;Sim;Sim
Isnaldo Bulhões Jr;MDB;AL;Sim;Sim
Ivan Valente;PSOL;SP;Não;Não
Ivoneide Caetano;PT;BA;Não;Não
Iza Arruda;MDB;PE;Ausente;Ausente
Jack Rocha;PT;ES;Não;Não
Jadyel Alencar;Republicanos;PI;Sim;Sim
Jandira Feghali;PCdoB;RJ;Não;Não
Jeferson Rodrigues;Republicanos;GO;Sim;Sim
Jefferson Campos;PL;SP;Sim;Sim
Jilmar Tatto;PT;SP;Sim;Sim
João Cury;MDB;SP;Sim;Sim
João Daniel;PT;SE;Não;Não
João Leão;PP;BA;Ausente;Ausente
João Maia;PP;RN;Sim;Sim
JoãoCarlosBacelar;PL;BA;Ausente;Ausente
Joaquim Passarinho;PL;PA;Sim;Sim
Jonas Donizette;PSB;SP;Sim;Sim
Jorge Braz;Republicanos;RJ;Sim;Sim
Jorge Goetten;Republicanos;SC;Sim;Sim
Jorge Solla;PT;BA;Não;Não
José Airton;PT;CE;Ausente;Ausente
José Guimarães;PT;CE;Não;Ausente
José Medeiros;PL;MT;Sim;Sim
José Nelto;União;GO;Sim;Sim
José Priante;MDB;PA;Sim;Sim
José Rocha;União;BA;Sim;Sim
Joseildo Ramos;PT;BA;Não;Não
Josenildo;PDT;AP;Sim;Ausente
Josias Gomes;PT;BA;Não;Não
JosimarMaranhãozi;PL;MA;Sim;Sim
Josivaldo JP;PSD;MA;Sim;Sim
Juarez Costa;MDB;MT;Não;Não
Julia Zanatta;PL;SC;Sim;Sim
Juliana Cardoso;PT;SP;Não;Não
Julio Arcoverde;PP;PI;Sim;Sim
Júlio Cesar;PSD;PI;Sim;Sim
Julio Cesar Ribeir;Republicanos;DF;Sim;Sim
Julio Lopes;PP;RJ;Sim;Sim
Juninho do Pneu;União;RJ;Sim;Sim
Junio Amaral;PL;MG;Sim;Sim
Júnior Ferrari;PSD;PA;Não;Não
Junior Lourenço;PL;MA;Sim;Sim
Júnior Mano;PSB;CE;Sim;Sim
Juscelino Filho;União;MA;Sim;Sim
Keniston Braga;MDB;PA;Sim;Ausente
Kiko Celeguim;PT;SP;Sim;Sim
Kim Kataguiri;União;SP;Não;Não
Lafayette Andrada;Republicanos;MG;Sim;Sim
Laura Carneiro;PSD;RJ;Não;Não
Lêda Borges;PSDB;GO;Sim;Sim
Lenir de Assis;PT;PR;Não;Não
Leo Prates;PDT;BA;Sim;Sim
Leonardo Monteiro;PT;MG;Sim;Não
Leônidas Cristino;PDT;CE;Ausente;Ausente
Leur Lomanto Jr.;União;BA;Sim;Sim
Lídice da Mata;PSB;BA;Não;Não
Lincoln Portela;PL;MG;Sim;Sim
Lindbergh Farias;PT;RJ;Não;Não
Lindenmeyer;PT;RS;Não;Não
Lucas Ramos;PSB;PE;Sim;Sim
Lucas Redecker;PSDB;RS;Não;Não
Luciano Alves;PSD;PR;Não;Não
Luciano Amaral;PSD;AL;Sim;Sim
Luciano Bivar;União;PE;Sim;Sim
Luciano Ducci;PSB;PR;Não;Não
Luciano Vieira;Republicanos;RJ;Ausente;Sim
Lucio Mosquini;MDB;RO;Sim;Ausente
Luis Carlos Gomes;Republicanos;RJ;Sim;Sim
Luis Tibé;Avante;MG;Sim;Sim
Luisa Canziani;PSD;PR;Sim;Sim
Luiz Carlos Busato;União;RS;Sim;Sim
Luiz Carlos Hauly;Podemos;PR;Não;Não
Luiz Carlos Motta;PL;SP;Sim;Sim
Luiz Couto;PT;PB;Não;Não
Luiz F. Vampiro;MDB;SC;Sim;Sim
Luiz Fernando;PSD;MG;Sim;Sim
Luiz Gastão;PSD;CE;Não;Não
Luiz Lima;Novo;RJ;Não;Não
Luiz Nishimori;PSD;PR;Não;Não
Luiz P.O Bragança;PL;SP;Sim;Ausente
LuizAntônioCorrêa;PP;RJ;Sim;Sim
Luiza Erundina;PSOL;SP;Não;Não
Luizianne Lins;PT;CE;Não;Ausente
Lula da Fonte;PP;PE;Sim;Sim
Magda Mofatto;PRD;GO;Sim;Sim
Marangoni;União;SP;Sim;Sim
Marcel van Hattem;Novo;RS;Não;Não
Marcelo Álvaro;PL;MG;Sim;Sim
Marcelo Crivella;Republicanos;RJ;Sim;Sim
Marcelo Moraes;PL;RS;Sim;Sim
Marcio Alvino;PL;SP;Sim;Sim
Márcio Biolchi;MDB;RS;Sim;Sim
Márcio Honaiser;PDT;MA;Sim;Sim
Márcio Jerry;PCdoB;MA;Não;Não
Márcio Marinho;Republicanos;BA;Sim;Sim
Marcon;PT;RS;Não;Não
Marcos A. Sampaio;PSD;PI;Sim;Sim
Marcos Pereira;Republicanos;SP;Sim;Sim
Marcos Pollon;PL;MS;Sim;Sim
Marcos Soares;União;RJ;Sim;Sim
Marcos Tavares;PDT;RJ;Sim;Sim
Maria Arraes;Solidariedade;PE;Não;Não
Maria Rosas;Republicanos;SP;Sim;Sim
Maria do Rosário;PT;RS;Não;Não
Mario Frias;PL;SP;Sim;Sim
Mário Heringer;PDT;MG;Sim;Sim
Mário Negromonte J;PP;BA;Sim;Sim
Marreca Filho;PRD;MA;Sim;Sim
Marussa Boldrin;MDB;GO;Sim;Sim
Marx Beltrão;PP;AL;Sim;Sim
Matheus Noronha;PL;CE;Sim;Sim
Maurício Carva lho;União;RO;Sim;Sim
Mauricio Marcon;Podemos;RS;Sim;Sim
Mauricio Neves;PP;SP;Sim;Sim
Mauricio do Vôlei;PL;MG;Sim;Sim
MauroBenevides Fo.;PDT;CE;Sim;Sim
Max Lemos;PDT;RJ;Sim;Sim
Meire Serafim;União;AC;Sim;Sim
Mendonça Filho;União;PE;Sim;Sim
Merlong Solano;PT;PI;Sim;Sim
Mersinho Lucena;PP;PB;Sim;Ausente
Messias Donato;Republicanos;ES;Sim;Sim
Miguel Ângelo;PT;MG;Ausente;Não
Miguel Lombardi;PL;SP;Sim;Sim
Mis. José Olimpio;PL;SP;Sim;Sim
Misael Varella;PSD;MG;Sim;Ausente
Moses Rodrigues;União;CE;Sim;Sim
Murillo Gouvea;União;RJ;Sim;Sim
Murilo Galdino;Republicanos;PB;Sim;Sim
Natália Bonavides;PT;RN;Não;Não
Nelinho Freitas;MDB;CE;Sim;Sim
Nelson Barbudo;PL;MT;Sim;Sim
Nely Aquino;Podemos;MG;Sim;Sim
Neto Carletto;Avante;BA;Sim;Sim
Newton Cardoso Jr;MDB;MG;Sim;Sim
Nicoletti;União;RR;Sim;Sim
Nikolas Ferreira;PL;MG;Sim;Sim
Nilto Tatto;PT;SP;Não;Não
Odair Cunha;PT;MG;Sim;Sim
Olival Marques;MDB;PA;Sim;Sim
Orlando Silva;PCdoB;SP;Não;Não
Osmar Terra;PL;RS;Sim;Sim
Ossesio Silva;Republicanos;PE;Sim;Sim
Otoni de Paula;MDB;RJ;Não;Não
Otto Alencar Filho;PSD;BA;Não;Não
Padovani;União;PR;Sim;Sim
Padre João;PT;MG;Não;Não
Pastor Claudio Mar;União;PA;Sim;Sim
Pastor Diniz;União;RR;Sim;Sim
Pastor Eurico;PL;PE;Ausente;Sim
Pastor Gil;PL;MA;Sim;Sim
Pastor Henrique V.;PSOL;RJ;Não;Não
Pastor Isidório;Avante;BA;Não;Não
Patrus Ananias;PT;MG;Não;Não
Pauderney Avelino;União;AM;Sim;Sim
Paulão;PT;AL;Não;Não
Paulinho da Força;Solidariedade;SP;Sim;Sim
Paulo A. Barbosa;PSDB;SP;Não;Não
Paulo Abi-Ackel;PSDB;MG;Sim;Sim
Paulo Azi;União;BA;Sim;Sim
Paulo Folletto;PSB;ES;Sim;Sim
Paulo Freire Costa;PL;SP;Sim;Sim
Paulo Guedes;PT;MG;Sim;Sim
Paulo Lemos;PSOL;AP;Não;Não
Paulo Litro;PSD;PR;Sim;Sim
Paulo Magalhães;PSD;BA;Sim;Sim
Paulo Pimenta;PT;RS;Não;Não
Pedro A ihara;PRD;MG;Sim;Sim
Pedro Campos;PSB;PE;Sim;Sim
Pedro Lucas F.;União;MA;Sim;Sim
Pedro Lupion;PP;PR;Sim;Sim
Pedro Paulo;PSD;RJ;Sim;Sim
Pedro Uczai;PT;SC;Não;Não
Pedro Westphalen;PP;RS;Sim;Sim
Pezenti;MDB;SC;Sim;Sim
Pinheirinho;PP;MG;Sim;Sim
Pompeo de Mattos;PDT;RS;Não;Ausente
Pr.Marco Feliciano;PL;SP;Sim;Sim
Prof Marcivania;PCdoB;AP;Não;Não
Prof. Reginaldo V.;PV;DF;Não;Não
Professor Alcides;PL;GO;Sim;Sim
Professora Luciene;PSOL;SP;Não;Não
Rafael Brito;MDB;AL;Sim;Ausente
Rafael Fera;Podemos;RO;Sim;Sim
Rafael Prudente;MDB;DF;Sim;Sim
Rafael Simoes;União;MG;Sim;Sim
Raimundo Costa;Podemos;BA;Sim;Sim
Raimundo Santos;PSD;PA;Sim;Sim
Reginaldo Lopes;PT;MG;Não;Não
Reimont;PT;RJ;Não;Não
Reinhold Stephanes;PSD;PR;Sim;Sim
Renata Abreu;Podemos;SP;Sim;Sim
Renilce Nicodemos;MDB;PA;Sim;Sim
Renildo Calheiros;PCdoB;PE;Não;Não
Ribamar Silva;PSD;SP;Não;Não
Ricardo Abrão;União;RJ;Sim;Sim
Ricardo Ayres;Republicanos;TO;Sim;Sim
Ricardo Barros;PP;PR;Sim;Sim
Ricardo Guidi;PL;SC;Sim;Sim
Ricardo Maia;MDB;BA;Sim;Sim
Ricardo Salles;Novo;SP;Ausente;Ausente
Robério Monteiro;PDT;CE;Sim;Sim
Roberta Roma;PL;BA;Sim;Sim
Roberto Duarte;Republicanos;AC;Sim;Sim
Roberto Monteiro;PL;RJ;Sim;Sim
Robinson Faria;PP;RN;Sim;Sim
Rodolfo Nogueira;PL;MS;Sim;Sim
Rodrigo Estacho;PSD;PR;Sim;Sim
Rodrigo Gambale;Podemos;SP;Sim;Sim
Rodrigo Rollemberg;PSB;DF;Não;Não
Rodrigo Valadares;União;SE;Sim;Sim
Rodrigo da Zaeli;PL;MT;Sim;Sim
Rodrigo de Castro;União;MG;Sim;Sim
Rogéria Santos;Republicanos;BA;Sim;Sim
Rogério Correia;PT;MG;Não;Não
Romero Rodrigues;Podemos;PB;Sim;Sim
Ronaldo Nogueira;Republicanos;RS;Sim;Sim
Rosana Valle;PL;SP;Sim;Sim
Rosangela Moro;União;SP;Não;Não
Rosângela Reis;PL;MG;Sim;Sim
Rubens Otoni;PT;GO;Não;Não
Rubens Pereira Jr.;PT;MA;Não;Não
Rui Falcão;PT;SP;Não;Não
Ruy Carneiro;Podemos;PB;Não;Não
Sâmia Bomfim;PSOL;SP;Não;Não
Samuel Santos;Podemos;GO;Sim;Sim
Samuel Viana;Republicanos;MG;Sim;Sim
Sanderson;PL;RS;Sim;Sim
Sargento Fahur;PSD;PR;Sim;Sim
Sargento Portugal;Podemos;RJ;Sim;Sim
Saulo Pedroso;PSD;SP;Não;Não
Sergio Souza;MDB;PR;Sim;Sim
Sgt. Gonçalves;PL;RN;Sim;Sim
Sidney Leite;PSD;AM;Não;Não
Silas Câmara;Republicanos;AM;Sim;Sim
Silvia Cristina;PP;RO;Sim;Sim
Silvye Alves;União;GO;Sim;Sim
Simone Marquetto;MDB;SP;Sim;Sim
Socorro Neri;PP;AC;Não;Não
Soraya Santos;PL;RJ;Sim;Sim
Sóstenes Cavalcant;PL;RJ;Sim;Sim
Stefano Aguiar;PSD;MG;Sim;Ausente
Tabata Amaral;PSB;SP;Não;Não
Tadeu Veneri;PT;PR;Não;Não
Talíria Petrone;PSOL;RJ;Não;Não
Tarcísio Motta;PSOL;RJ;Não;Não
Thiago Flores;Republicanos;RO;Ausente;Ausente
Thiago de Joaldo;PP;SE;Sim;Sim
Tiago Dimas;Podemos;TO;Sim;Sim
Tião Medeiros;PP;PR;Sim;Sim
Tiririca;PL;SP;Sim;Sim
ToninhoWandscheer;PP;PR;Sim;Sim
Túlio Gadêl ha;Rede;PE;Não;Não
Valmir Assunção;PT;BA;Não;Não
Vander Loubet;PT;MS;Não;Não
Vermelho;PP;PR;Sim;Sim
Vicentinho;PT;SP;Não;Não
Vicentinho Júnior;PP;TO;Sim;Sim
Vinicius Carvalho;Republicanos;SP;Sim;Sim
Vinicius Gurgel;PL;AP;Sim;Sim
Vitor Lippi;PSDB;SP;Não;Não
Waldemar Oliveira;Avante;PE;Sim;Sim
Waldenor Pereira;PT;BA;Não;Não
Weliton Prado;Solidariedade;MG;Ausente;Não
Wellington Roberto;PL;PB;Sim;Sim
Welter;PT;PR;Não;Não
Wilson Santiago;Republicanos;PB;Sim;Sim
Yandra Moura;União;SE;Ausente;Ausente
Yury do Paredão;MDB;CE;Sim;Sim
Zé Adriano;PP;AC;Sim;Sim
Zé Neto;PT;BA;Não;Não
Zé Silva;Solidariedade;MG;Ausente;Ausente
Zé Trovão;PL;SC;Sim;Sim
Zé Vitor;PL;MG;Sim;Sim
ZéHaroldoCathedral;PSD;RR;Não;Não
Zeca Dirceu;PT;PR;Ausente;Ausente
Zezinho Barbary;PP;AC;Sim;Sim
Zucco;PL;RS;Sim;Sim`;

    // Função para processar os dados brutos e transformar em um array de objetos
    const parseData = (dataString) => {
        const lines = dataString.trim().split('\n');
        const headers = lines.shift().split(';').map(h => h.trim());
        
        return lines.map(line => {
            const values = line.split(';');
            return {
                nome: values[0].trim(),
                partido: values[1].trim(),
                uf: values[2].trim(),
                voto1: values[3].trim(),
                voto2: values[4].trim(),
            };
        });
    };

    const allDeputies = parseData(rawData);
    let chartTurno1, chartPartidos; // Variáveis para guardar as instâncias dos gráficos

    // Elementos do DOM
    const searchNome = document.getElementById('search-nome');
    const filterPartido = document.getElementById('filter-partido');
    const filterUf = document.getElementById('filter-uf');
    const filterVoto = document.getElementById('filter-voto');
    const labelFilterVoto = document.getElementById('label-filter-voto');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const table = document.getElementById('deputies-table');
    const deputyCountSpan = document.getElementById('deputy-count');
    const radioTurno1 = document.getElementById('radio-turno1');
    const radioTurno2 = document.getElementById('radio-turno2');
    const chartTurnoTitle = document.getElementById('chart-turno-title');
    const chartPartidosTitle = document.getElementById('chart-partidos-title');

    // Elementos e lógica para o seletor de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.className = savedTheme + '-theme';
    themeToggleBtn.textContent = savedTheme === 'dark' ? 'Tema Claro' : 'Tema Escuro';

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            themeToggleBtn.textContent = 'Tema Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            themeToggleBtn.textContent = 'Tema Claro';
            localStorage.setItem('theme', 'dark');
        }
        filterAndRender(); // Re-renderiza os gráficos com a nova cor da legenda
    });
    // Função para popular os filtros
    const populateFilters = () => {
        const partidos = [...new Set(allDeputies.map(d => d.partido))].sort();
        const ufs = [...new Set(allDeputies.map(d => d.uf))].sort();
        const votos = [...new Set(allDeputies.map(d => d.voto1))].sort();

        const createOptions = (select, options, defaultText, clear = true) => {
            if (clear) {
                select.innerHTML = `<option value="">${defaultText}</option>`;
            }
            select.innerHTML = `<option value="">${defaultText}</option>`;
            options.forEach(opt => {
                select.innerHTML += `<option value="${opt}">${opt}</option>`;
            });
        };

        createOptions(filterPartido, partidos, 'Todos os Partidos');
        createOptions(filterUf, ufs, 'Todas as UFs');
        createOptions(filterVoto, votos, 'Todos os Votos');
    };

    const updateVoteFilter = () => {
        const turnoSelecionado = document.querySelector('input[name="turno"]:checked').value;
        const votoKey = turnoSelecionado === '1' ? 'voto1' : 'voto2';
        const votos = [...new Set(allDeputies.map(d => d[votoKey]))].sort();
        
        const createOptions = (select, options, defaultText) => {
            select.innerHTML = `<option value="">${defaultText}</option>`;
            options.forEach(opt => select.innerHTML += `<option value="${opt}">${opt}</option>`);
        };

        createOptions(filterVoto, votos, 'Todos os Votos');
    };

    // Função para renderizar a tabela de deputados
    const renderTable = (deputies) => {
        // Cabeçalho da tabela
        let tableHTML = `
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Partido</th>
                    <th>UF</th>
                    <th>Voto 1º Turno</th>
                    <th>Voto 2º Turno</th>
                </tr>
            </thead>
            <tbody>
        `;

        // Linhas da tabela
        deputies.forEach(dep => {
            // Verifica se o voto mudou entre os turnos
            const voteChanged = dep.voto1 !== dep.voto2;
            const rowClass = voteChanged ? 'class="changed-vote"' : '';

            tableHTML += `
                <tr ${rowClass}>
                    <td>${dep.nome}</td>
                    <td>${dep.partido}</td>
                    <td>${dep.uf}</td>
                    <td>${dep.voto1}</td>
                    <td>${dep.voto2}</td>
                </tr>
            `;
        });

        tableHTML += `</tbody>`;
        table.innerHTML = tableHTML;
        deputyCountSpan.textContent = deputies.length;
    };

    // Função para atualizar os gráficos
    const updateCharts = (deputies) => {
        const turnoSelecionado = document.querySelector('input[name="turno"]:checked').value;
        const votoKey = turnoSelecionado === '1' ? 'voto1' : 'voto2';
        const turnoLabel = `${turnoSelecionado}º Turno`;

        // Define a cor do texto dos gráficos com base no tema atual
        const chartTextColor = document.body.classList.contains('dark-theme') ? '#f4f7f9' : '#333';

        // Dados para o gráfico de votos no 1º turno
        const votosTurno1 = deputies.reduce((acc, dep) => {
            acc[dep[votoKey]] = (acc[dep[votoKey]] || 0) + 1;
            return acc;
        }, {});

        // Dados para o gráfico de votos por partido
        const votosPorPartido = deputies.reduce((acc, dep) => {
            if (!acc[dep.partido]) {
                acc[dep.partido] = { 'Sim': 0, 'Não': 0, 'Abstenção': 0, 'Ausente': 0, 'Art. 17': 0 };
            }
            acc[dep.partido][dep[votoKey]]++;
            return acc;
        }, {});

        // Destruir gráficos antigos se existirem
        if (chartTurno1) chartTurno1.destroy();
        if (chartPartidos) chartPartidos.destroy();

        // Atualiza títulos
        chartTurnoTitle.textContent = `Votos no ${turnoLabel}`;
        chartPartidosTitle.textContent = `Votos por Partido (${turnoLabel})`;

        // Renderizar gráfico de pizza para o 1º turno
        const ctxTurno1 = document.getElementById('chart-turno1').getContext('2d');
        chartTurno1 = new Chart(ctxTurno1, {
            type: 'pie',
            data: {
                labels: Object.keys(votosTurno1),
                datasets: [{
                    data: Object.values(votosTurno1),
                    backgroundColor: ['#ffc107', '#6c757d', '#dc3545', '#28a745', '#17a2b8'], // Abstenção, Ausente, Não, Sim, Art. 17
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: chartTextColor }
                    }
                }
            }
        });

        // Renderizar gráfico de barras para votos por partido
        const ctxPartidos = document.getElementById('chart-partidos').getContext('2d');
        chartPartidos = new Chart(ctxPartidos, {
            type: 'bar',
            data: {
                labels: Object.keys(votosPorPartido),
                datasets: [
                    { label: 'Sim', data: Object.values(votosPorPartido).map(v => v.Sim), backgroundColor: '#28a745' },
                    { label: 'Não', data: Object.values(votosPorPartido).map(v => v.Não), backgroundColor: '#dc3545' },
                    { label: 'Abstenção', data: Object.values(votosPorPartido).map(v => v.Abstenção), backgroundColor: '#ffc107' },
                    { label: 'Ausente', data: Object.values(votosPorPartido).map(v => v.Ausente), backgroundColor: '#6c757d' },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: chartTextColor }
                    }
                },
                scales: {
                    x: { stacked: true, ticks: { color: chartTextColor } },
                    y: { stacked: true, beginAtZero: true, ticks: { color: chartTextColor } }
                }
            }
        });
    };

    // Função principal para filtrar e atualizar o dashboard
    const filterAndRender = () => {
        const nome = searchNome.value.toLowerCase();
        const partido = filterPartido.value;
        const uf = filterUf.value;
        const voto = filterVoto.value;
        const turnoSelecionado = document.querySelector('input[name="turno"]:checked').value;
        const votoKey = turnoSelecionado === '1' ? 'voto1' : 'voto2';

        labelFilterVoto.textContent = `Filtrar por Voto (${turnoSelecionado}º Turno):`;

        const filteredDeputies = allDeputies.filter(dep => {
            return (!nome || dep.nome.toLowerCase().includes(nome)) &&
                   (!partido || dep.partido === partido) &&
                   (!uf || dep.uf === uf) &&
                   (!voto || dep[votoKey] === voto);
        });

        renderTable(filteredDeputies);
        updateCharts(filteredDeputies);
    };

    // Event Listeners para os filtros
    searchNome.addEventListener('input', filterAndRender);
    filterPartido.addEventListener('change', filterAndRender);
    filterUf.addEventListener('change', filterAndRender);
    filterVoto.addEventListener('change', filterAndRender);
    radioTurno1.addEventListener('change', () => {
        updateVoteFilter();
        filterAndRender();
    });
    radioTurno2.addEventListener('change', () => {
        updateVoteFilter();
        filterAndRender();
    });

    clearFiltersBtn.addEventListener('click', () => {
        searchNome.value = '';
        filterPartido.value = '';
        filterUf.value = '';
        filterVoto.value = '';
        filterAndRender();
    });

    // Inicialização do dashboard
    populateFilters();
    filterAndRender();
});