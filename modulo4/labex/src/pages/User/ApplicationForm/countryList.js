import { Select, Option } from '../../../components/Input'

export const CountryList = props => {
  return (
    <Select
      name="country"
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      required
      lastItem
    >
      {props.children}
      <Option value="Brasil" selected="selected">
        Brasil
      </Option>
      <Option value="Afeganistão">Afeganistão</Option>
      <Option value="África do Sul">África do Sul</Option>
      <Option value="Albânia">Albânia</Option>
      <Option value="Alemanha">Alemanha</Option>
      <Option value="Andorra">Andorra</Option>
      <Option value="Angola">Angola</Option>
      <Option value="Anguilla">Anguilla</Option>
      <Option value="Antilhas Holandesas">Antilhas Holandesas</Option>
      <Option value="Antárctida">Antárctida</Option>
      <Option value="Antígua e Barbuda">Antígua e Barbuda</Option>
      <Option value="Argentina">Argentina</Option>
      <Option value="Argélia">Argélia</Option>
      <Option value="Armênia">Armênia</Option>
      <Option value="Aruba">Aruba</Option>
      <Option value="Arábia Saudita">Arábia Saudita</Option>
      <Option value="Austrália">Austrália</Option>
      <Option value="Áustria">Áustria</Option>
      <Option value="Azerbaijão">Azerbaijão</Option>
      <Option value="Bahamas">Bahamas</Option>
      <Option value="Bahrein">Bahrein</Option>
      <Option value="Bangladesh">Bangladesh</Option>
      <Option value="Barbados">Barbados</Option>
      <Option value="Belize">Belize</Option>
      <Option value="Benim">Benim</Option>
      <Option value="Bermudas">Bermudas</Option>
      <Option value="Bielorrússia">Bielorrússia</Option>
      <Option value="Bolívia">Bolívia</Option>
      <Option value="Botswana">Botswana</Option>
      <Option value="Brunei">Brunei</Option>
      <Option value="Bulgária">Bulgária</Option>
      <Option value="Burkina Faso">Burkina Faso</Option>
      <Option value="Burundi">Burundi</Option>
      <Option value="Butão">Butão</Option>
      <Option value="Bélgica">Bélgica</Option>
      <Option value="Bósnia e Herzegovina">Bósnia e Herzegovina</Option>
      <Option value="Cabo Verde">Cabo Verde</Option>
      <Option value="Camarões">Camarões</Option>
      <Option value="Camboja">Camboja</Option>
      <Option value="Canadá">Canadá</Option>
      <Option value="Catar">Catar</Option>
      <Option value="Cazaquistão">Cazaquistão</Option>
      <Option value="Chade">Chade</Option>
      <Option value="Chile">Chile</Option>
      <Option value="China">China</Option>
      <Option value="Chipre">Chipre</Option>
      <Option value="Colômbia">Colômbia</Option>
      <Option value="Comores">Comores</Option>
      <Option value="Coreia do Norte">Coreia do Norte</Option>
      <Option value="Coreia do Sul">Coreia do Sul</Option>
      <Option value="Costa do Marfim">Costa do Marfim</Option>
      <Option value="Costa Rica">Costa Rica</Option>
      <Option value="Croácia">Croácia</Option>
      <Option value="Cuba">Cuba</Option>
      <Option value="Dinamarca">Dinamarca</Option>
      <Option value="Djibouti">Djibouti</Option>
      <Option value="Dominica">Dominica</Option>
      <Option value="Egito">Egito</Option>
      <Option value="El Salvador">El Salvador</Option>
      <Option value="Emirados Árabes Unidos">Emirados Árabes Unidos</Option>
      <Option value="Equador">Equador</Option>
      <Option value="Eritreia">Eritreia</Option>
      <Option value="Escócia">Escócia</Option>
      <Option value="Eslováquia">Eslováquia</Option>
      <Option value="Eslovênia">Eslovênia</Option>
      <Option value="Espanha">Espanha</Option>
      <Option value="Estados Federados da Micronésia">
        Estados Federados da Micronésia
      </Option>
      <Option value="Estados Unidos">Estados Unidos</Option>
      <Option value="Estônia">Estônia</Option>
      <Option value="Etiópia">Etiópia</Option>
      <Option value="Fiji">Fiji</Option>
      <Option value="Filipinas">Filipinas</Option>
      <Option value="Finlândia">Finlândia</Option>
      <Option value="França">França</Option>
      <Option value="Gabão">Gabão</Option>
      <Option value="Gana">Gana</Option>
      <Option value="Geórgia">Geórgia</Option>
      <Option value="Gibraltar">Gibraltar</Option>
      <Option value="Granada">Granada</Option>
      <Option value="Gronelândia">Gronelândia</Option>
      <Option value="Grécia">Grécia</Option>
      <Option value="Guadalupe">Guadalupe</Option>
      <Option value="Guam">Guam</Option>
      <Option value="Guatemala">Guatemala</Option>
      <Option value="Guernesei">Guernesei</Option>
      <Option value="Guiana">Guiana</Option>
      <Option value="Guiana Francesa">Guiana Frances</Option>
      <Option value="Guiné">Guiné</Option>
      <Option value="Guiné Equatorial">Guiné Equatorial</Option>
      <Option value="Guiné-Bissau">Guiné-Bissau</Option>
      <Option value="Gâmbia">Gâmbia</Option>
      <Option value="Haiti">Haiti</Option>
      <Option value="Honduras">Honduras</Option>
      <Option value="Hong Kong">Hong Kong</Option>
      <Option value="Hungria">Hungria</Option>
      <Option value="Ilha Bouvet">Ilha Bouvet</Option>
      <Option value="Ilha de Man">Ilha de Man</Option>
      <Option value="Ilha do Natal">Ilha do Natal</Option>
      <Option value="Ilha Heard e Ilhas McDonald">
        Ilha Heard e Ilhas McDonald
      </Option>
      <Option value="Ilha Norfolk">Ilha Norfolk</Option>
      <Option value="Ilhas Cayman">Ilhas Cayman</Option>
      <Option value="Ilhas Cocos (Keeling)">Ilhas Cocos (Keeling)</Option>
      <Option value="Ilhas Cook">Ilhas Cook</Option>
      <Option value="Ilhas Feroé">Ilhas Feroé</Option>
      <Option value="Ilhas Geórgia do Sul e Sandwich do Sul">
        Ilhas Geórgia do Sul e Sandwich do Sul
      </Option>
      <Option value="Ilhas Malvinas">Ilhas Malvinas</Option>
      <Option value="Ilhas Marshall">Ilhas Marshall</Option>
      <Option value="Ilhas Menores Distantes dos Estados Unidos">
        Ilhas Menores Distantes dos Estados Unidos
      </Option>
      <Option value="Ilhas Salomão">Ilhas Salomão</Option>
      <Option value="Ilhas Virgens Americanas">Ilhas Virgens Americanas</Option>
      <Option value="Ilhas Virgens Britânicas">Ilhas Virgens Britânicas</Option>
      <Option value="Ilhas Åland">Ilhas Åland</Option>
      <Option value="Indonésia">Indonésia</Option>
      <Option value="Inglaterra">Inglaterra</Option>
      <Option value="Índia">Índia</Option>
      <Option value="Iraque">Iraque</Option>
      <Option value="Irlanda do Norte">Irlanda do Norte</Option>
      <Option value="Irlanda">Irlanda</Option>
      <Option value="Irã">Irã</Option>
      <Option value="Islândia">Islândia</Option>
      <Option value="Israel">Israel</Option>
      <Option value="Itália">Itália</Option>
      <Option value="Iêmen">Iêmen</Option>
      <Option value="Jamaica">Jamaica</Option>
      <Option value="Japão">Japão</Option>
      <Option value="Jersey">Jersey</Option>
      <Option value="Jordânia">Jordânia</Option>
      <Option value="Kiribati">Kiribati</Option>
      <Option value="Kuwait">Kuwait</Option>
      <Option value="Laos">Laos</Option>
      <Option value="Lesoto">Lesoto</Option>
      <Option value="Letônia">Letônia</Option>
      <Option value="Libéria">Libéria</Option>
      <Option value="Liechtenstein">Liechtenstein</Option>
      <Option value="Lituânia">Lituânia</Option>
      <Option value="Luxemburgo">Luxemburgo</Option>
      <Option value="Líbano">Líbano</Option>
      <Option value="Líbia">Líbia</Option>
      <Option value="Macau">Macau</Option>
      <Option value="Macedônia">Macedônia</Option>
      <Option value="Madagáscar">Madagáscar</Option>
      <Option value="Malawi">Malawi</Option>
      <Option value="Maldivas">Maldivas</Option>
      <Option value="Mali">Mali</Option>
      <Option value="Malta">Malta</Option>
      <Option value="Malásia">Malásia</Option>
      <Option value="Marianas Setentrionais">Marianas Setentrionais</Option>
      <Option value="Marrocos">Marrocos</Option>
      <Option value="Martinica">Martinica</Option>
      <Option value="Mauritânia">Mauritânia</Option>
      <Option value="Maurícia">Maurícia</Option>
      <Option value="Mayotte">Mayotte</Option>
      <Option value="Moldávia">Moldávia</Option>
      <Option value="Mongólia">Mongólia</Option>
      <Option value="Montenegro">Montenegro</Option>
      <Option value="Montserrat">Montserrat</Option>
      <Option value="Moçambique">Moçambique</Option>
      <Option value="Myanmar">Myanmar</Option>
      <Option value="México">México</Option>
      <Option value="Mônaco">Mônaco</Option>
      <Option value="Namíbia">Namíbia</Option>
      <Option value="Nauru">Nauru</Option>
      <Option value="Nepal">Nepal</Option>
      <Option value="Nicarágua">Nicarágua</Option>
      <Option value="Nigéria">Nigéria</Option>
      <Option value="Niue">Niue</Option>
      <Option value="Noruega">Noruega</Option>
      <Option value="Nova Caledônia">Nova Caledônia</Option>
      <Option value="Nova Zelândia">Nova Zelândia</Option>
      <Option value="Níger">Níger</Option>
      <Option value="Omã">Omã</Option>
      <Option value="Palau">Palau</Option>
      <Option value="Palestina">Palestina</Option>
      <Option value="Panamá">Panamá</Option>
      <Option value="Papua-Nova Guiné">Papua-Nova Guiné</Option>
      <Option value="Paquistão">Paquistão</Option>
      <Option value="Paraguai">Paraguai</Option>
      <Option value="País de Gales">País de Gales</Option>
      <Option value="Países Baixos">Países Baixos</Option>
      <Option value="Peru">Peru</Option>
      <Option value="Pitcairn">Pitcairn</Option>
      <Option value="Polinésia Francesa">Polinésia Francesa</Option>
      <Option value="Polônia">Polônia</Option>
      <Option value="Porto Rico">Porto Rico</Option>
      <Option value="Portugal">Portugal</Option>
      <Option value="Quirguistão">Quirguistão</Option>
      <Option value="Quênia">Quênia</Option>
      <Option value="Reino Unido">Reino Unido</Option>
      <Option value="República Centro-Africana">
        República Centro-Africana
      </Option>
      <Option value="República Checa">República Checa</Option>
      <Option value="República Democrática do Congo">
        República Democrática do Congo
      </Option>
      <Option value="República do Congo">República do Congo</Option>
      <Option value="República Dominicana">República Dominicana</Option>
      <Option value="Reunião">Reunião</Option>
      <Option value="Romênia">Romênia</Option>
      <Option value="Ruanda">Ruanda</Option>
      <Option value="Rússia">Rússia</Option>
      <Option value="Saara Ocidental">Saara Ocidental</Option>
      <Option value="Saint Martin">Saint Martin</Option>
      <Option value="Saint-Barthélemy">Saint-Barthélemy</Option>
      <Option value="Saint-Pierre e Miquelon">Saint-Pierre e Miquelon</Option>
      <Option value="Samoa Americana">Samoa Americana</Option>
      <Option value="Samoa">Samoa</Option>
      <Option value="Santa Helena, Ascensão e Tristão da Cunha">
        Santa Helena, Ascensão e Tristão da Cunha
      </Option>
      <Option value="Santa Lúcia">Santa Lúcia</Option>
      <Option value="Senegal">Senegal</Option>
      <Option value="Serra Leoa">Serra Leoa</Option>
      <Option value="Seychelles">Seychelles</Option>
      <Option value="Singapura">Singapura</Option>
      <Option value="Somália">Somália</Option>
      <Option value="Sri Lanka">Sri Lanka</Option>
      <Option value="Suazilândia">Suazilândia</Option>
      <Option value="Sudão">Sudão</Option>
      <Option value="Suriname">Suriname</Option>
      <Option value="Suécia">Suécia</Option>
      <Option value="Suíça">Suíça</Option>
      <Option value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</Option>
      <Option value="São Cristóvão e Nevis">São Cristóvão e Nevis</Option>
      <Option value="São Marino">São Marino</Option>
      <Option value="São Tomé e Príncipe">São Tomé e Príncipe</Option>
      <Option value="São Vicente e Granadinas">São Vicente e Granadinas</Option>
      <Option value="Sérvia">Sérvia</Option>
      <Option value="Síria">Síria</Option>
      <Option value="Tadjiquistão">Tadjiquistão</Option>
      <Option value="Tailândia">Tailândia</Option>
      <Option value="Taiwan">Taiwan</Option>
      <Option value="Tanzânia">Tanzânia</Option>
      <Option value="Terras Austrais e Antárticas Francesas">
        Terras Austrais e Antárticas Francesas
      </Option>
      <Option value="Território Britânico do Oceano Índico">
        Território Britânico do Oceano Índico
      </Option>
      <Option value="Timor-Leste">Timor-Leste</Option>
      <Option value="Togo">Togo</Option>
      <Option value="Tonga">Tonga</Option>
      <Option value="Toquelau">Toquelau</Option>
      <Option value="Trinidad e Tobago">Trinidad e Tobago</Option>
      <Option value="Tunísia">Tunísia</Option>
      <Option value="Turcas e Caicos">Turcas e Caicos</Option>
      <Option value="Turquemenistão">Turquemenistão</Option>
      <Option value="Turquia">Turquia</Option>
      <Option value="Tuvalu">Tuvalu</Option>
      <Option value="Ucrânia">Ucrânia</Option>
      <Option value="Uganda">Uganda</Option>
      <Option value="Uruguai">Uruguai</Option>
      <Option value="Uzbequistão">Uzbequistão</Option>
      <Option value="Vanuatu">Vanuatu</Option>
      <Option value="Vaticano">Vaticano</Option>
      <Option value="Venezuela">Venezuela</Option>
      <Option value="Vietname">Vietname</Option>
      <Option value="Wallis e Futuna">Wallis e Futuna</Option>
      <Option value="Zimbabwe">Zimbabwe</Option>
      <Option value="Zâmbia">Zâmbia</Option>
    </Select>
  )
}
