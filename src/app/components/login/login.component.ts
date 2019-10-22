import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private prueba;
  constructor() { }

  ngOnInit() {
  }

  public hacerLogin() {
    console.log("{\n" +
      "    \"glossary\": {\n" +
      "        \"title\": \"example glossary\",\n" +
      "\t\t\"GlossDiv\": {\n" +
      "            \"title\": \"S\",\n" +
      "\t\t\t\"GlossList\": {\n" +
      "                \"GlossEntry\": {\n" +
      "                    \"ID\": \"SGML\",\n" +
      "\t\t\t\t\t\"SortAs\": \"SGML\",\n" +
      "\t\t\t\t\t\"GlossTerm\": \"Standard Generalized Markup Language\",\n" +
      "\t\t\t\t\t\"Acronym\": \"SGML\",\n" +
      "\t\t\t\t\t\"Abbrev\": \"ISO 8879:1986\",\n" +
      "\t\t\t\t\t\"GlossDef\": {\n" +
      "                        \"para\": \"A meta-markup language, used to create markup languages such as DocBook.\",\n" +
      "\t\t\t\t\t\t\"GlossSeeAlso\": [\"GML\", \"XML\"]\n" +
      "                    },\n" +
      "\t\t\t\t\t\"GlossSee\": \"markup\"\n" +
      "                }\n" +
      "            }\n" +
      "        }\n" +
      "    }\n" +
      "}");
    var objeto = JSON.parse("{\n" +
      "    \"glossary\": {\n" +
      "        \"title\": \"example glossary\",\n" +
      "\t\t\"GlossDiv\": {\n" +
      "            \"title\": \"S\",\n" +
      "\t\t\t\"GlossList\": {\n" +
      "                \"GlossEntry\": {\n" +
      "                    \"ID\": \"SGML\",\n" +
      "\t\t\t\t\t\"SortAs\": \"SGML\",\n" +
      "\t\t\t\t\t\"GlossTerm\": \"Standard Generalized Markup Language\",\n" +
      "\t\t\t\t\t\"Acronym\": \"SGML\",\n" +
      "\t\t\t\t\t\"Abbrev\": \"ISO 8879:1986\",\n" +
      "\t\t\t\t\t\"GlossDef\": {\n" +
      "                        \"para\": \"A meta-markup language, used to create markup languages such as DocBook.\",\n" +
      "\t\t\t\t\t\t\"GlossSeeAlso\": [\"GML\", \"XML\"]\n" +
      "                    },\n" +
      "\t\t\t\t\t\"GlossSee\": \"markup\"\n" +
      "                }\n" +
      "            }\n" +
      "        }\n" +
      "    }\n" +
      "}");
    this.prueba = objeto.glossary.title;

  }

}
