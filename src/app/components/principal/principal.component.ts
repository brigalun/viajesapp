import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  airports:any[] = [
        {
        "id": 9,
        "nombre": "A. I. Benito Juárez",
        "descripcion": "A. I. Benito Juárez",
        "latitud": null,
        "longitud": null,
        "iata": "MEX",
        "activo": true,
        "ciudad": {
        "id": 9,
        "nombre": "Querétaro",
        "descripcion": "Querétaro",
        "estado": {
        "id": 9,
        "nombre": "Ciudad de México",
        "descripcion": null
        }
        }
        },
        {
        "id": 14,
        "nombre": "A. I. Miguel Hidalgo y Costilla",
        "descripcion": "A. I. Miguel Hidalgo y Costilla",
        "latitud": null,
        "longitud": null,
        "iata": "GDL",
        "activo": true,
        "ciudad": {
        "id": 14,
        "nombre": "Guadalajara",
        "descripcion": "Guadalajara",
        "estado": {
        "id": 14,
        "nombre": "Jalisco",
        "descripcion": null
        }
        }
        },
        {
        "id": 20,
        "nombre": "A. I. Xoxocotlán",
        "descripcion": "A. I. Xoxocotlán",
        "latitud": null,
        "longitud": null,
        "iata": "OAX",
        "activo": true,
        "ciudad": {
        "id": 20,
        "nombre": "Oaxaca",
        "descripcion": "Oaxaca",
        "estado": {
        "id": 20,
        "nombre": "Oaxaca",
        "descripcion": null
        }
        }
        },
        {
        "id": 55,
        "nombre": "A. I. Quetzalcóatl",
        "descripcion": "A. I. Quetzalcóatl",
        "latitud": null,
        "longitud": null,
        "iata": "NLD",
        "activo": true,
        "ciudad": {
        "id": 55,
        "nombre": "Nuevo Laredo",
        "descripcion": "Nuevo Laredo",
        "estado": {
        "id": 28,
        "nombre": "Tamaulipas",
        "descripcion": null
        }
        }
        },
        {
        "id": 32,
        "nombre": "A. I. Gral. Mariano Matamoros",
        "descripcion": "A. I. Gral. Mariano Matamoros",
        "latitud": null,
        "longitud": null,
        "iata": "CVJ",
        "activo": true,
        "ciudad": {
        "id": 32,
        "nombre": "Cuernavaca",
        "descripcion": "Cuernavaca",
        "estado": {
        "id": 17,
        "nombre": "Morelos",
        "descripcion": null
        }
        }
        },
        {
        "id": 63,
        "nombre": "A. I. de Palenque",
        "descripcion": "A. I. de Palenque",
        "latitud": null,
        "longitud": null,
        "iata": "PQM",
        "activo": true,
        "ciudad": {
        "id": 63,
        "nombre": "Palenque",
        "descripcion": "Palenque",
        "estado": {
        "id": 7,
        "nombre": "Chiapas",
        "descripcion": null
        }
        }
        },
        {
        "id": 13,
        "nombre": "A. I. Gral. Abelardo L. Rodríguez",
        "descripcion": "A. I. Gral. Abelardo L. Rodríguez",
        "latitud": null,
        "longitud": null,
        "iata": "TIJ",
        "activo": true,
        "ciudad": {
        "id": 13,
        "nombre": "Tijuana",
        "descripcion": "Tijuana",
        "estado": {
        "id": 2,
        "nombre": "Baja California",
        "descripcion": null
        }
        }
        },
        {
        "id": 28,
        "nombre": "A. I. Guadalupe Victoria",
        "descripcion": "A. I. Guadalupe Victoria",
        "latitud": null,
        "longitud": null,
        "iata": "DGO",
        "activo": true,
        "ciudad": {
        "id": 28,
        "nombre": "Durango",
        "descripcion": "Durango",
        "estado": {
        "id": 10,
        "nombre": "Durango",
        "descripcion": null
        }
        }
        },
        {
        "id": 3,
        "nombre": "A. I. Gral. Mariano Escobedo",
        "descripcion": "A. I. Gral. Mariano Escobedo",
        "latitud": null,
        "longitud": null,
        "iata": "MTY",
        "activo": true,
        "ciudad": {
        "id": 3,
        "nombre": "Monterrey",
        "descripcion": "Monterrey",
        "estado": {
        "id": 19,
        "nombre": "Nuevo León",
        "descripcion": null
        }
        }
        },
        {
        "id": 46,
        "nombre": "A. I. de Bahías de Huatulco",
        "descripcion": "A. I. de Bahías de Huatulco",
        "latitud": null,
        "longitud": null,
        "iata": "HUX",
        "activo": true,
        "ciudad": {
        "id": 46,
        "nombre": "Huatulco",
        "descripcion": "Huatulco",
        "estado": {
        "id": 20,
        "nombre": "Oaxaca",
        "descripcion": null
        }
        }
        },
        {
        "id": 8,
        "nombre": "A. I. Manuel Márquez de León",
        "descripcion": "A. I. Manuel Márquez de León",
        "latitud": null,
        "longitud": null,
        "iata": "LAP",
        "activo": true,
        "ciudad": {
        "id": 8,
        "nombre": "Toluca",
        "descripcion": "Toluca",
        "estado": {
        "id": 3,
        "nombre": "Baja California Sur",
        "descripcion": null
        }
        }
        },
        {
        "id": 7,
        "nombre": "A. I. de Querétaro",
        "descripcion": "A. I. de Querétaro",
        "latitud": null,
        "longitud": null,
        "iata": "QRO",
        "activo": true,
        "ciudad": {
        "id": 7,
        "nombre": "ZM León",
        "descripcion": "ZM León",
        "estado": {
        "id": 22,
        "nombre": "Querétaro",
        "descripcion": null
        }
        }
        },
        {
        "id": 5,
        "nombre": "A. I. Ponciano Arriaga",
        "descripcion": "A. I. Ponciano Arriaga",
        "latitud": null,
        "longitud": null,
        "iata": "SLP",
        "activo": true,
        "ciudad": {
        "id": 5,
        "nombre": "Aguascalientes",
        "descripcion": "Aguascalientes",
        "estado": {
        "id": 24,
        "nombre": "San Luis Potosí",
        "descripcion": null
        }
        }
        },
        {
        "id": 15,
        "nombre": "A. I. Lic. Gustavo Díaz Ordaz",
        "descripcion": "A. I. Lic. Gustavo Díaz Ordaz",
        "latitud": null,
        "longitud": null,
        "iata": "PVR",
        "activo": true,
        "ciudad": {
        "id": 15,
        "nombre": "Puerto Vallarta",
        "descripcion": "Puerto Vallarta",
        "estado": {
        "id": 14,
        "nombre": "Jalisco",
        "descripcion": null
        }
        }
        },
        {
        "id": 25,
        "nombre": "A. I. Manuel Crescencio Rejón",
        "descripcion": "A. I. Manuel Crescencio Rejón",
        "latitud": null,
        "longitud": null,
        "iata": "MID",
        "activo": true,
        "ciudad": {
        "id": 25,
        "nombre": "Mérida",
        "descripcion": "Mérida",
        "estado": {
        "id": 31,
        "nombre": "Yucatán",
        "descripcion": null
        }
        }
        },
        {
        "id": 62,
        "nombre": "A. I. de Nogales",
        "descripcion": "A. I. de Nogales",
        "latitud": null,
        "longitud": null,
        "iata": "NOG",
        "activo": true,
        "ciudad": {
        "id": 62,
        "nombre": "Nogales",
        "descripcion": "Nogales",
        "estado": {
        "id": 26,
        "nombre": "Sonora",
        "descripcion": null
        }
        }
        },
        {
        "id": 60,
        "nombre": "A. I. Gral. José María Yáñez",
        "descripcion": "A. I. Gral. José María Yáñez",
        "latitud": null,
        "longitud": null,
        "iata": "GYM",
        "activo": true,
        "ciudad": {
        "id": 60,
        "nombre": "Guaymas",
        "descripcion": "Guaymas",
        "estado": {
        "id": 26,
        "nombre": "Sonora",
        "descripcion": null
        }
        }
        },
        {
        "id": 44,
        "nombre": "A. I. Gral. Juan N. Álvarez",
        "descripcion": "A. I. Gral. Juan N. Álvarez",
        "latitud": null,
        "longitud": null,
        "iata": "ACA",
        "activo": true,
        "ciudad": {
        "id": 44,
        "nombre": "Acapulco",
        "descripcion": "Acapulco",
        "estado": {
        "id": 12,
        "nombre": "Guerrero",
        "descripcion": null
        }
        }
        },
        {
        "id": 38,
        "nombre": "A. I. Amado Nervo",
        "descripcion": "A. I. Amado Nervo",
        "latitud": null,
        "longitud": null,
        "iata": "TPQ",
        "activo": true,
        "ciudad": {
        "id": 38,
        "nombre": "Tepic",
        "descripcion": "Tepic",
        "estado": {
        "id": 18,
        "nombre": "Nayarit",
        "descripcion": null
        }
        }
        },
        {
        "id": 51,
        "nombre": "A. I. Venustiano Carranza",
        "descripcion": "A. I. Venustiano Carranza",
        "latitud": null,
        "longitud": null,
        "iata": "LOV",
        "activo": true,
        "ciudad": {
        "id": 51,
        "nombre": "Monclova",
        "descripcion": "Monclova",
        "estado": {
        "id": 5,
        "nombre": "Coahuila",
        "descripcion": null
        }
        }
        },
        {
        "id": 47,
        "nombre": "A. I. de Puerto Escondido",
        "descripcion": "A. I. de Puerto Escondido",
        "latitud": null,
        "longitud": null,
        "iata": "PXM",
        "activo": true,
        "ciudad": {
        "id": 47,
        "nombre": "Puerto Escondido",
        "descripcion": "Puerto Escondido",
        "estado": {
        "id": 20,
        "nombre": "Oaxaca",
        "descripcion": null
        }
        }
        },
        {
        "id": 16,
        "nombre": "A. I. Federal de Culiacán",
        "descripcion": "A. I. Federal de Culiacán",
        "latitud": null,
        "longitud": null,
        "iata": "CUL",
        "activo": true,
        "ciudad": {
        "id": 16,
        "nombre": "Culiacán",
        "descripcion": "Culiacán",
        "estado": {
        "id": 25,
        "nombre": "Sinaloa",
        "descripcion": null
        }
        }
        },
        {
        "id": 61,
        "nombre": "A. I. de Mar de Cortés",
        "descripcion": "A. I. de Mar de Cortés",
        "latitud": null,
        "longitud": null,
        "iata": "PPE",
        "activo": true,
        "ciudad": {
        "id": 61,
        "nombre": "Puerto Peñasco",
        "descripcion": "Puerto Peñasco",
        "estado": {
        "id": 26,
        "nombre": "Sonora",
        "descripcion": null
        }
        }
        },
        {
        "id": 26,
        "nombre": "A. I. Plan de Guadalupe",
        "descripcion": "A. I. Plan de Guadalupe",
        "latitud": null,
        "longitud": null,
        "iata": "SLW",
        "activo": true,
        "ciudad": {
        "id": 26,
        "nombre": "Saltillo",
        "descripcion": "Saltillo",
        "estado": {
        "id": 5,
        "nombre": "Coahuila",
        "descripcion": null
        }
        }
        },
        {
        "id": 23,
        "nombre": "A. I. Carlos Rovirosa Pérez",
        "descripcion": "A. I. Carlos Rovirosa Pérez",
        "latitud": null,
        "longitud": null,
        "iata": "VSA",
        "activo": true,
        "ciudad": {
        "id": 23,
        "nombre": "Villahermosa",
        "descripcion": "Villahermosa",
        "estado": {
        "id": 27,
        "nombre": "Tabasco",
        "descripcion": null
        }
        }
        },
        {
        "id": 56,
        "nombre": "A. I. del Norte",
        "descripcion": "A. I. del Norte",
        "latitud": null,
        "longitud": null,
        "iata": "NTR",
        "activo": true,
        "ciudad": {
        "id": 56,
        "nombre": "Monterrey",
        "descripcion": "Monterrey",
        "estado": {
        "id": 19,
        "nombre": "Nuevo León",
        "descripcion": null
        }
        }
        },
        {
        "id": 31,
        "nombre": "A. I. Gral. Leobardo C. Ruiz",
        "descripcion": "A. I. Gral. Leobardo C. Ruiz",
        "latitud": null,
        "longitud": null,
        "iata": "ZCL",
        "activo": true,
        "ciudad": {
        "id": 31,
        "nombre": "Zacatecas",
        "descripcion": "Zacatecas",
        "estado": {
        "id": 32,
        "nombre": "Zacatecas",
        "descripcion": null
        }
        }
        },
        {
        "id": 43,
        "nombre": "A. I. de Tapachula",
        "descripcion": "A. I. de Tapachula",
        "latitud": null,
        "longitud": null,
        "iata": "TAP",
        "activo": true,
        "ciudad": {
        "id": 43,
        "nombre": "Tapachula",
        "descripcion": "Tapachula",
        "estado": {
        "id": 7,
        "nombre": "Chiapas",
        "descripcion": null
        }
        }
        },
        {
        "id": 54,
        "nombre": "A. I. Gral. Servando Canales",
        "descripcion": "A. I. Gral. Servando Canales",
        "latitud": null,
        "longitud": null,
        "iata": "MAM",
        "activo": true,
        "ciudad": {
        "id": 54,
        "nombre": "Matamoros",
        "descripcion": "Matamoros",
        "estado": {
        "id": 28,
        "nombre": "Tamaulipas",
        "descripcion": null
        }
        }
        },
        {
        "id": 11,
        "nombre": "A. I. de Los Cabos",
        "descripcion": "A. I. de Los Cabos",
        "latitud": null,
        "longitud": null,
        "iata": "SJD",
        "activo": true,
        "ciudad": {
        "id": 11,
        "nombre": "San José del Cabo",
        "descripcion": "San José del Cabo",
        "estado": {
        "id": 3,
        "nombre": "Baja California Sur",
        "descripcion": null
        }
        }
        },
        {
        "id": 59,
        "nombre": "A. I. de Cabo San Lucas",
        "descripcion": "A. I. de Cabo San Lucas",
        "latitud": null,
        "longitud": null,
        "iata": "CSL",
        "activo": true,
        "ciudad": {
        "id": 59,
        "nombre": "Cabo San Lucas",
        "descripcion": "Cabo San Lucas",
        "estado": {
        "id": 3,
        "nombre": "Baja California Sur",
        "descripcion": null
        }
        }
        },
        {
        "id": 50,
        "nombre": "A. I. de Ciudad Acuña",
        "descripcion": "A. I. de Ciudad Acuña",
        "latitud": null,
        "longitud": null,
        "iata": "ACN",
        "activo": true,
        "ciudad": {
        "id": 50,
        "nombre": "Ciudad Acuña",
        "descripcion": "Ciudad Acuña",
        "estado": {
        "id": 5,
        "nombre": "Coahuila",
        "descripcion": null
        }
        }
        },
        {
        "id": 18,
        "nombre": "A. I. Gral. Ignacio Pesqueira García",
        "descripcion": "A. I. Gral. Ignacio Pesqueira García",
        "latitud": null,
        "longitud": null,
        "iata": "HMO",
        "activo": true,
        "ciudad": {
        "id": 18,
        "nombre": "Hermosillo",
        "descripcion": "Hermosillo",
        "estado": {
        "id": 26,
        "nombre": "Sonora",
        "descripcion": null
        }
        }
        },
        {
        "id": 36,
        "nombre": "A. I. Gral. Francisco J. Mujica",
        "descripcion": "A. I. Gral. Francisco J. Mujica",
        "latitud": null,
        "longitud": null,
        "iata": "MLM",
        "activo": true,
        "ciudad": {
        "id": 36,
        "nombre": "Morelia",
        "descripcion": "Morelia",
        "estado": {
        "id": 16,
        "nombre": "Michoacán",
        "descripcion": null
        }
        }
        },
        {
        "id": 57,
        "nombre": "A. I. de San Felipe",
        "descripcion": "A. I. de San Felipe",
        "latitud": null,
        "longitud": null,
        "iata": "SFH",
        "activo": true,
        "ciudad": {
        "id": 57,
        "nombre": "San Felipe",
        "descripcion": "San Felipe",
        "estado": {
        "id": 2,
        "nombre": "Baja California",
        "descripcion": null
        }
        }
        },
        {
        "id": 4,
        "nombre": "A. I. Lic. Adolfo López Mateos",
        "descripcion": "A. I. Lic. Adolfo López Mateos",
        "latitud": null,
        "longitud": null,
        "iata": "TLC",
        "activo": true,
        "ciudad": {
        "id": 4,
        "nombre": "San Luis Potosí",
        "descripcion": "San Luis Potosí",
        "estado": {
        "id": 15,
        "nombre": "México",
        "descripcion": null
        }
        }
        },
        {
        "id": 49,
        "nombre": "A. I. de Minatitlán",
        "descripcion": "A. I. de Minatitlán",
        "latitud": null,
        "longitud": null,
        "iata": "MTT",
        "activo": true,
        "ciudad": {
        "id": 49,
        "nombre": "Minatitlán",
        "descripcion": "Minatitlán",
        "estado": {
        "id": 30,
        "nombre": "Veracruz",
        "descripcion": null
        }
        }
        },
        {
        "id": 12,
        "nombre": "A. I. Gral. Rodolfo Sánchez Taboada",
        "descripcion": "A. I. Gral. Rodolfo Sánchez Taboada",
        "latitud": null,
        "longitud": null,
        "iata": "MXL",
        "activo": true,
        "ciudad": {
        "id": 12,
        "nombre": "Mexicali",
        "descripcion": "Mexicali",
        "estado": {
        "id": 2,
        "nombre": "Baja California",
        "descripcion": null
        }
        }
        },
        {
        "id": 48,
        "nombre": "A. I. de Chetumal",
        "descripcion": "A. I. de Chetumal",
        "latitud": null,
        "longitud": null,
        "iata": "CTM",
        "activo": true,
        "ciudad": {
        "id": 48,
        "nombre": "Chetumal",
        "descripcion": "Chetumal",
        "estado": {
        "id": 23,
        "nombre": "Quintana Roo",
        "descripcion": null
        }
        }
        },
        {
        "id": 21,
        "nombre": "A. I. de Cancún",
        "descripcion": "A. I. de Cancún",
        "latitud": null,
        "longitud": null,
        "iata": "CUN",
        "activo": true,
        "ciudad": {
        "id": 21,
        "nombre": "Cancún",
        "descripcion": "Cancún",
        "estado": {
        "id": 23,
        "nombre": "Quintana Roo",
        "descripcion": null
        }
        }
        },
        {
        "id": 58,
        "nombre": "A. I. de Loreto",
        "descripcion": "A. I. de Loreto",
        "latitud": null,
        "longitud": null,
        "iata": "LTO",
        "activo": true,
        "ciudad": {
        "id": 58,
        "nombre": "Loreto",
        "descripcion": "Loreto",
        "estado": {
        "id": 3,
        "nombre": "Baja California Sur",
        "descripcion": null
        }
        }
        },
        {
        "id": 42,
        "nombre": "A. I. de Ciudad del Carmen",
        "descripcion": "A. I. de Ciudad del Carmen",
        "latitud": null,
        "longitud": null,
        "iata": "CME",
        "activo": true,
        "ciudad": {
        "id": 42,
        "nombre": "Ciudad del Carmen",
        "descripcion": "Ciudad del Carmen",
        "estado": {
        "id": 4,
        "nombre": "Campeche",
        "descripcion": null
        }
        }
        },
        {
        "id": 1,
        "nombre": "A. I. Gral. Roberto Fierro Villalobos",
        "descripcion": "A. I. Gral. Roberto Fierro Villalobos",
        "latitud": null,
        "longitud": null,
        "iata": "CUU",
        "activo": true,
        "ciudad": {
        "id": 1,
        "nombre": "Chihuahua",
        "descripcion": "Chihuahua",
        "estado": {
        "id": 8,
        "nombre": "Chihuahua",
        "descripcion": null
        }
        }
        },
        {
        "id": 40,
        "nombre": "A. I. de Ciudad Obregón",
        "descripcion": "A. I. de Ciudad Obregón",
        "latitud": null,
        "longitud": null,
        "iata": "CEN",
        "activo": true,
        "ciudad": {
        "id": 40,
        "nombre": "Ciudad Obregón",
        "descripcion": "Ciudad Obregón",
        "estado": {
        "id": 26,
        "nombre": "Sonora",
        "descripcion": null
        }
        }
        },
        {
        "id": 39,
        "nombre": "A. I. Federal del Valle del Fuerte",
        "descripcion": "A. I. Federal del Valle del Fuerte",
        "latitud": null,
        "longitud": null,
        "iata": "LMM",
        "activo": true,
        "ciudad": {
        "id": 39,
        "nombre": "Los Mochis",
        "descripcion": "Los Mochis",
        "estado": {
        "id": 25,
        "nombre": "Sinaloa",
        "descripcion": null
        }
        }
        },
        {
        "id": 6,
        "nombre": "A. I. Lic. Jesús Terán Peredo",
        "descripcion": "A. I. Lic. Jesús Terán Peredo",
        "latitud": null,
        "longitud": null,
        "iata": "AGU",
        "activo": true,
        "ciudad": {
        "id": 6,
        "nombre": "Ciudad de México",
        "descripcion": "Ciudad de México",
        "estado": {
        "id": 1,
        "nombre": "Aguascalientes",
        "descripcion": null
        }
        }
        },
        {
        "id": 17,
        "nombre": "A. I. Gral. Rafael Buelna",
        "descripcion": "A. I. Gral. Rafael Buelna",
        "latitud": null,
        "longitud": null,
        "iata": "MZT",
        "activo": true,
        "ciudad": {
        "id": 17,
        "nombre": "Mazatlán",
        "descripcion": "Mazatlán",
        "estado": {
        "id": 25,
        "nombre": "Sinaloa",
        "descripcion": null
        }
        }
        },
        {
        "id": 34,
        "nombre": "A. N. Lic. Miguel de la Madrid",
        "descripcion": "A. N. Lic. Miguel de la Madrid",
        "latitud": null,
        "longitud": null,
        "iata": "CLQ",
        "activo": true,
        "ciudad": {
        "id": 34,
        "nombre": "Colima",
        "descripcion": "Colima",
        "estado": {
        "id": 6,
        "nombre": "Colima",
        "descripcion": null
        }
        }
        },
        {
        "id": 41,
        "nombre": "A. I. Ing. Alberto Acuña Ongay",
        "descripcion": "A. I. Ing. Alberto Acuña Ongay",
        "latitud": null,
        "longitud": null,
        "iata": "CPE",
        "activo": true,
        "ciudad": {
        "id": 41,
        "nombre": "Campeche",
        "descripcion": "Campeche",
        "estado": {
        "id": 4,
        "nombre": "Campeche",
        "descripcion": null
        }
        }
        },
        {
        "id": 35,
        "nombre": "A. I. Playa de Oro",
        "descripcion": "A. I. Playa de Oro",
        "latitud": null,
        "longitud": null,
        "iata": "ZLO",
        "activo": true,
        "ciudad": {
        "id": 35,
        "nombre": "Manzanillo",
        "descripcion": "Manzanillo",
        "estado": {
        "id": 6,
        "nombre": "Colima",
        "descripcion": null
        }
        }
        },
        {
        "id": 33,
        "nombre": "A. I. Hermanos Serdán",
        "descripcion": "A. I. Hermanos Serdán",
        "latitud": null,
        "longitud": null,
        "iata": "PBC",
        "activo": true,
        "ciudad": {
        "id": 33,
        "nombre": "Puebla",
        "descripcion": "Puebla",
        "estado": {
        "id": 21,
        "nombre": "Puebla",
        "descripcion": null
        }
        }
        },
        {
        "id": 22,
        "nombre": "A. I. de Cozumel",
        "descripcion": "A. I. de Cozumel",
        "latitud": null,
        "longitud": null,
        "iata": "CZM",
        "activo": true,
        "ciudad": {
        "id": 22,
        "nombre": "Cozumel",
        "descripcion": "Cozumel",
        "estado": {
        "id": 23,
        "nombre": "Quintana Roo",
        "descripcion": null
        }
        }
        },
        {
        "id": 37,
        "nombre": "A. I. Gra. y Lic. Ignacio López Rayón",
        "descripcion": "A. I. Gra. y Lic. Ignacio López Rayón",
        "latitud": null,
        "longitud": null,
        "iata": "UPN",
        "activo": true,
        "ciudad": {
        "id": 37,
        "nombre": "Uruapan",
        "descripcion": "Uruapan",
        "estado": {
        "id": 16,
        "nombre": "Michoacán",
        "descripcion": null
        }
        }
        },
        {
        "id": 2,
        "nombre": "A. I. Abraham González",
        "descripcion": "A. I. Abraham González",
        "latitud": null,
        "longitud": null,
        "iata": "CJS",
        "activo": true,
        "ciudad": {
        "id": 2,
        "nombre": "Ciudad Juárez",
        "descripcion": "Ciudad Juárez",
        "estado": {
        "id": 8,
        "nombre": "Chihuahua",
        "descripcion": null
        }
        }
        },
        {
        "id": 53,
        "nombre": "A. I. Gral. Pedro José Méndez",
        "descripcion": "A. I. Gral. Pedro José Méndez",
        "latitud": null,
        "longitud": null,
        "iata": "CVM",
        "activo": true,
        "ciudad": {
        "id": 53,
        "nombre": "Ciudad Victoria",
        "descripcion": "Ciudad Victoria",
        "estado": {
        "id": 28,
        "nombre": "Tamaulipas",
        "descripcion": null
        }
        }
        },
        {
        "id": 24,
        "nombre": "A. I. Gral. Heriberto Jara",
        "descripcion": "A. I. Gral. Heriberto Jara",
        "latitud": null,
        "longitud": null,
        "iata": "VER",
        "activo": true,
        "ciudad": {
        "id": 24,
        "nombre": "Veracruz",
        "descripcion": "Veracruz",
        "estado": {
        "id": 30,
        "nombre": "Veracruz",
        "descripcion": null
        }
        }
        },
        {
        "id": 10,
        "nombre": "A. I. del Bajío",
        "descripcion": "A. I. del Bajío",
        "latitud": null,
        "longitud": null,
        "iata": "BJX",
        "activo": true,
        "ciudad": {
        "id": 10,
        "nombre": "La Paz",
        "descripcion": "La Paz",
        "estado": {
        "id": 11,
        "nombre": "Guanajuato",
        "descripcion": null
        }
        }
        },
        {
        "id": 30,
        "nombre": "A. I. Gral. Fco. Javier Mina",
        "descripcion": "A. I. Gral. Fco. Javier Mina",
        "latitud": null,
        "longitud": null,
        "iata": "TAM",
        "activo": true,
        "ciudad": {
        "id": 30,
        "nombre": "Tampico",
        "descripcion": "Tampico",
        "estado": {
        "id": 28,
        "nombre": "Tamaulipas",
        "descripcion": null
        }
        }
        },
        {
        "id": 45,
        "nombre": "A. I. de Ixtapa-Zihuatanejo",
        "descripcion": "A. I. de Ixtapa-Zihuatanejo",
        "latitud": null,
        "longitud": null,
        "iata": "ZIH",
        "activo": true,
        "ciudad": {
        "id": 45,
        "nombre": "Ixtapa-Zihuatanejo",
        "descripcion": "Ixtapa-Zihuatanejo",
        "estado": {
        "id": 12,
        "nombre": "Guerrero",
        "descripcion": null
        }
        }
        },
        {
        "id": 29,
        "nombre": "A. I. Gral. Lucio Blanco",
        "descripcion": "A. I. Gral. Lucio Blanco",
        "latitud": null,
        "longitud": null,
        "iata": "REX",
        "activo": true,
        "ciudad": {
        "id": 29,
        "nombre": "Reynosa",
        "descripcion": "Reynosa",
        "estado": {
        "id": 28,
        "nombre": "Tamaulipas",
        "descripcion": null
        }
        }
        },
        {
        "id": 19,
        "nombre": "A. I. Ángel Albino Corzo",
        "descripcion": "A. I. Ángel Albino Corzo",
        "latitud": null,
        "longitud": null,
        "iata": "TGZ",
        "activo": true,
        "ciudad": {
        "id": 19,
        "nombre": "Tuxtla Gutiérrez",
        "descripcion": "Tuxtla Gutiérrez",
        "estado": {
        "id": 7,
        "nombre": "Chiapas",
        "descripcion": null
        }
        }
        },
        {
        "id": 27,
        "nombre": "A. I. Francisco Sarabia",
        "descripcion": "A. I. Francisco Sarabia",
        "latitud": null,
        "longitud": null,
        "iata": "TRC",
        "activo": true,
        "ciudad": {
        "id": 27,
        "nombre": "Torreón",
        "descripcion": "Torreón",
        "estado": {
        "id": 5,
        "nombre": "Coahuila",
        "descripcion": null
        }
        }
        },
        {
        "id": 52,
        "nombre": "A. I. de Piedras Negras",
        "descripcion": "A. I. de Piedras Negras",
        "latitud": null,
        "longitud": null,
        "iata": "PDS",
        "activo": true,
        "ciudad": {
        "id": 52,
        "nombre": "Piedras Negras",
        "descripcion": "Piedras Negras",
        "estado": {
        "id": 5,
        "nombre": "Coahuila",
        "descripcion": null
        }
        }
        },
        {
        "id": 64,
        "nombre": "A. I. de Chichén Itzá",
        "descripcion": "A. I. de Chichén Itzá",
        "latitud": null,
        "longitud": null,
        "iata": "CZA",
        "activo": true,
        "ciudad": {
        "id": 64,
        "nombre": "Chichén Itzá",
        "descripcion": "Chichén Itzá",
        "estado": {
        "id": 31,
        "nombre": "Yucatán",
        "descripcion": null
        }
        }
        }
        ]

    
  //constructor() { }
  constructor(private service: BusquedaService) { }
  ngOnInit() {

  }

  public openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  public obtenerTodo(){
    var vuelos = this.service.obtenerAereopuerto().subscribe(
    data => {
        console.log("Datos obtenidos: ");
        console.log(data);
      }, error => {
        console.log("Error:");
        console.log(error);
      }
    );
  }

  public obtenerBusqueda(idciudad){
    var vuelos = this.service.obtenerCiudad(idciudad).subscribe(
    data => {
        console.log("Datos obtenidos: ");
        console.log(data);
      }, error => {
        console.log("Error:");
        console.log(error);
      }
    );

  }
  public colocarcard(){
    var tVuelo = (<HTMLInputElement>document.getElementById("customRadioInline1")).value;
    var origen = (<HTMLInputElement>document.getElementById("origenvuelo")).value;
    var destino = (<HTMLInputElement>document.getElementById("destinovuelo")).value;
    var fechaida = (<HTMLInputElement>document.getElementById("fechaida")).value;
    var fechavuelta = (<HTMLInputElement>document.getElementById("fechavuelta")).value;
    var categ = (<HTMLInputElement>document.getElementById("categoriavuelo")).value;
    var npersons = (<HTMLInputElement>document.getElementById("numeropersonas")).value;
    if(tVuelo == "sencillo"){
      var idciudad = this.obtenerIdCiudad(origen);
       this.obtenerBusqueda(idciudad);
    }
  }

  public obtenerIdCiudad(nombreciudad){
  var id;
    if(nombreciudad == "Querétaro")
      id = 9;
    if(nombreciudad == "Guadalajara")
      id = 14;
    if(nombreciudad == "Nuevo Laredo")
      id = 55;
    if(nombreciudad == "Cuernavaca")
      id = 32;
    if(nombreciudad == "Palenque")
      id = 63;
    if(nombreciudad == "Tijuana")
      id = 13;
    return id;
    //Aquí iria todo lo demas
  }
}
