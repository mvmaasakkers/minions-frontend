 export interface IJumba {
    filter: IFilter;
    input: IInput;
    parameters: IParameter[];
    payload: IPayload;
    Output: string;
    Private: boolean;
    NoBag: boolean;
    ForSaleSince: string;
    SoldSince: string;
    LastCheck: string;
    Type: number;
}

export interface IInput {
    "Fulltext": string;
    "Suggest": string;
    "Label": string;
}

export interface IFilter {
    "Street": string;
    "City": string;
    "Number": number;
    "Postcode": string;
    "County": string;
    "NumberOnly": number;
}

export interface IParameter {
    "Forsale": boolean;
    "Sold": boolean;
    "AmountForsale": number;
    "Price": number;
    "Size": number;
    "ClusterMembership": number;
}

export interface IPayload{
       "ID": string;
       "Address": string;
       "Country": string;
       "Province": string;
       "County": string;
       "Main": IMain;
       "Built": number;
       "Size": number;
       "Function": string;
       "Forsale": boolean;
       "Sold": boolean;
       "Location": ILocation;
       "Outline": IOutline[];
       "Price": number;
       "JumbaValue": number[];       
       "JumbaValueQuality": string;
       "Image": string;
       "Images": string[];
       "LivingScore": ILivingScore;
       "Funda": IFunda;
       "Jaap": IJaap;
       "Kenmerken": IKenmerken;
       "Type": string;
       "Bedrooms": number;
       "PerceelSize": number;
       "Rooms": number;
       "Details": string;
       "Maintenance": string;
       "Sanitation": string;
       "Kitchen": string;
       "Paintwork": string;
       "Garden": string;
       "View": string;
       "Balkony": string;
       "Garage": string;
       "Isolation":string;
       "Heating":string;
       "EnergylabelEstimate":string;
       "EnergylabelConsumptionEstimate":string;
       "BagVBOID":string;
       "Purpose":string;
       "Realter": IRealter;
       "Properties": IProperties;
       "Financial": string;
    }
    
    export interface IMain{
          "City": string;
          "Street": string;
          "Postcode": IPostcode;
          "Number": number;
          "NumberOnly": number;
          "NumberLetter": string;
          "NumberAddition": string;
    }
        export interface IPostcode{
             "P4":"3118",
             "P6":"3118BC"
          }

    export interface ILocation{
        "lat": string;
        "lon": string;
    }        
    export interface IOutline{
           "lat": number;
           "lon": number;
    }
    export interface ILivingScore{
        "PC4": number;
        "Score":number;
        "Year":number;
        "DiffPub":number;
        "DiffWon":number;
        "DiffVrz":number;
        "DiffBev":number;
        "DiffLftsam":number;
        "DiffVeilig":number;
    }
    export interface IFunda{
        "URL": string;
        "Price": number;
        "Rooms": number;
        "Size": number;
        "Description":string;
        "Since": string;
    }
    export interface IJaap{
        "URL": string;
        "Price": number;
        "Rooms": number;
        "Size": number;
        "Description":string;
        "Since": string;
    }
    export interface IKenmerken {
    
    }   
    export interface IRealter {
        "Name": string;
        "URL": string;
        "Phone": string;
    }
    export interface IProperties {
        "Bidding": string;
          "Bouwvorm": string;
          "AppartementSubType":string;
          "AppartementType":string;
          "WoonhuisType":string;
          "WoonhuisSubType":string;
          "SaleStatus":string;
          "Aanvaarding":string;
          "AanvaardingsDatum":string;
          "AanvaardingsToevoeging":string;
          "ServiceCosts":number;
          "Dimensions": IDimensions;
          "Onderhoud": IOnderhoud;
          "Bijzonderheden": IBijzonderheden;
          "Location": ILocation;
          "Garden": IGarden;
          "Lavatories": number;
          "Bathroom": IBathroom;
          "Storage": IStorage;
          "Garage": IGarage;
          "Description": IDescription;
          "Roof": IRoof;
          "Isolation": IIsolation;
          "WarmWater": IWarmWater;
          "Heating": IHeating;
          "CV": ICV;
          "Options": IOptions;
    } 
        export interface IDimensions {
            "Inhoud":number;
             "ExterneBergRuimte":number;
             "OverigeInpandigeRuimte":number;
             "GebouwGebondenBuitenRuimte":number;
        }
        export interface IOnderhoud {
            "Binnen": string;
            "Buiten": string;
        }
        export interface IBijzonderheden {
            "BeschermdStadsDorpsGezicht": boolean;
            "DubbeleBewoningAanwezig":boolean;
            "DubbeleBewoningMogelijk":boolean;
            "GedeeltelijkGestoffeerd":boolean;
            "GedeeltelijkVerhuurd":boolean;
            "Gemeubileerd":boolean;
            "Gestoffeerd":boolean;
            "Monument":boolean;
            "MonumentaalPand":boolean;
            "ToegankelijkGehandicapten":boolean;
            "ToegankelijkOuderen":boolean;
        }
        export interface IGarden {
            "Back":boolean;
            "No":boolean;
            "Patio":boolean;
            "Place":boolean;
            "Around":boolean;
            "Front":boolean;
            "Side":boolean;
            "SunTerrace":boolean;
            "RoofTerrace":boolean;
            "Balcony":boolean;
            "Main": string;
            "MainLength": number;
            "MainWidth": number;
            "MainSize": number;
            "AllSize": number;
            "Condition": string;
            "AroundBack":boolean;
            "Orientation": string;
        }
        export interface IBathroom {
            "Amount": number;
            "Bathtub": boolean;
            "SittingBathtub":boolean;
            "Shower":boolean;
            "Lavatory":boolean;
            "Sauna":boolean;
        }
        export interface IStorage {
            "Type": string;
             "Amount": string;
             "Isolation": IIsolation;
             "Options": IOptions;
        }
            export interface IIsolation {
                    "Dakisolatie":boolean;
                    "DubbelGlas":boolean;
                    "EcoBouw":boolean;
                    "GedeeltelijkDubbelGlas":boolean;
                    "GeenIsolatie":boolean;
                    "GeenSpouw":boolean;
                    "MuurIsolatie":boolean;
                    "VloerIsolatie":boolean;
                    "VolledigGeisoleerd":boolean;
                    "VoorzetRamen":boolean;
            }
            export interface IOptions {
                "ElectricDoor":boolean;
                "Electricity":boolean;
                "Loft":boolean;
                "Heating":boolean;
                "Water":boolean;
            }
        export interface IGarage {
            "AangebouwdHout":boolean;
             "AangebouwdSteen":boolean;
             "Carport":boolean;
             "GarageMetCarport":boolean;
             "Box":boolean;
             "Inpandig":boolean;
             "Losstaand":boolean;
             "Aangebouwd":boolean;
             "Souterrain":boolean;
             "VrijstaandHout":boolean;
             "VrijstaandSteen":boolean;
             "Parkeerkelder":boolean;
             "Parkeerplaats":boolean;
             "BetaaldParkeren":boolean;
             "Vergunninghouders":boolean;
             "Parkeergarages":boolean;
             "VrijParkeren":boolean;
             "GeenGarage":boolean;
             "GarageMogelijk":boolean;
             "Options": IOptions;
             "Amount": string;
             "Cars": string;
             "Size": number;
        }
            export interface IOptions{
                "ElectricDoor":boolean;
                "Electricity":boolean;
                "Loft":boolean;
                "Heating":boolean;
                "Water":boolean;
            }
        export interface IDescription {
            "Algemeen":string;
            "Buurt":string;
            "Bereikbaarheid":string;
            "Faciliteiten":string;
            "Bijzonderheden":string;
            "LinkMeerInfo":string;
        }

        export interface IRoof{
            "Type":string;
             "Material": IMaterial;
        }
            export interface IMaterial {
                    "Asbest":boolean;
                    "Bitumineuze":boolean;
                    "Dakpannen":boolean;
                    "Kunststof":boolean;
                    "Leisteen":boolean;
                    "MetaalOverig":boolean;
                    "Riet":boolean;
            }
        export interface IIsolation {
            "Dakisolatie":boolean;
            "DubbelGlas":boolean;
            "EcoBouw":boolean;
            "GedeeltelijkDubbelGlas":boolean;
            "GeenIsolatie":boolean;
            "GeenSpouw":boolean;
            "MuurIsolatie":boolean;
            "VloerIsolatie":boolean;
            "VolledigGeisoleerd":boolean;
            "VoorzetRamen":boolean;
        }
        export interface IWarmWater {
            "CentraleVoorziening":boolean;
            "CVKetel":boolean;
            "ElektrischeBoilerEigendom":boolean;
            "ElektrischeBoilerHuur":boolean;
            "GasBoilerEigendom":boolean;
            "GasBoilerHuur":boolean;
            "GeenVerwarmdWater":boolean;
            "GeiserEigendom":boolean;
            "GeiserHuur":boolean;
            "ZonneBoiler":boolean;
            "ZonneCollectoren":boolean;
        }
        export interface IHeating {
            "Main":"",
            "Blokverwarming":boolean;
            "CVKetel":boolean;
            "ElektrischeVerwarming":boolean;
            "GasKachels":boolean;
            "GeenVerwarming":boolean;
            "HeteLuchtVerwarming":boolean;
            "KolenKachel":boolean;
            "MoederHaard":boolean;
            "MogelijkheidOpenHaard":boolean;
            "MuurVerwarming":boolean;
            "OpenHaard":boolean;
            "StadsVerwarming":boolean;
            "VloerverwarmingGedeeltelijk":boolean;
            "VloerverwarmingGeheel":boolean;
            "Warmtepomp":boolean;
            "Pelletkachel":boolean;
        }
        export interface ICV {
            "Type":"",
            "Built":"",
            "Owned":"",
            "Fuel":"",
            "Combi":""
        }
        export interface IOptions{
            "Airconditioning":boolean;
            "Alarm": boolean;
            "Dakraam":boolean;
            "FransBalkon":boolean;
            "Jacuzzi":boolean;
            "Lift":boolean;
            "MechanischeVentilatie":boolean;
            "Rolluiken":boolean;
            "RookKanaal":boolean;
            "Satellietschotel":boolean;
            "Sauna":boolean;
            "Schuifpui":boolean;
            "StoomCabine":boolean;
            "TVKabel":boolean;
            "Windmolen":boolean;
            "ZonneCollectoren":boolean;
            "Zonwering":boolean;
            "Zwembad":boolean;
        }




