/**
 * hero model
 */

class PowerStatsSchema {
  intelligence: Number;
  strength: Number;
  speed: Number;
  durability: Number;
  power: Number;
  combat: Number;
}

class AppearanceSchema {
  gender: String;
  race: String;
  height: Array<String>;
  weight: Array<String>;
  eyeColor: String;
  hairColor: String;
}

class BiographySchema {
  fullName: String;
  alterEgos: String;
  aliases: Array<String>;
  placeOfBirth: String;
  firstAppearance: String;
  publisher: String;
  alignment: String;
}

class WorkSchema {
  occupation: String;
  base: String;
}
class ConnectionsSchema {
  affiliation: String;
  relatives: String;
}

class ImagesSchema {
  url: String;
}

export class Hero {
  id: Number;
  name: String;
  slug: String;
  powerstats: PowerStatsSchema;
  appearance: AppearanceSchema;
  biography: BiographySchema;
  work: WorkSchema;
  connections: ConnectionsSchema;
  image: ImagesSchema;
}
