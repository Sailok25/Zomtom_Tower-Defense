export const tiposZombies = {
  basico: {
    velocidad: 1.5,
    vida: 100,
    tasaAparicion: 0.60,
    variantes: [
      { nombre: "normal", sprite: "z_basico.png" },
      { nombre: "desmembrado", sprite: "z_basico_desmembrado.png" }
    ]
  },

  rapido: {
    velocidad: 3,
    vida: 50,
    tasaAparicion: 0.25,
    variantes: [
      { nombre: "camiseta", sprite: "z_fast_camiseta.png" },
      { nombre: "pantalones", sprite: "z_fast_pantalones.png" }
    ]
  },

  tanque: {
    velocidad: 1,
    vida: 200,
    tasaAparicion: 0.10,
    variantes: [
      { nombre: "basico", sprite: "z_tank_basico.png", daño: 15 },
      { nombre: "hacha", sprite: "z_tank_hacha.png", daño: 20 },
      { nombre: "hacha_doble", sprite: "z_tank_hacha_doble.png", daño: 25 },
      { nombre: "mace", sprite: "z_tank_mace.png", daño: 30 },
      { nombre: "martillo", sprite: "z_tank_martillo.png", daño: 35 },
      { nombre: "porra", sprite: "z_tank_porra.png", daño: 18 }
    ]
  },

  especial: {
    velocidad: 2,
    vida: 150,
    tasaAparicion: 0.05,
    variantes: [
      { nombre: "duende", sprite: "z_special_duende.png" },
      { nombre: "trol", sprite: "z_special_trol.png" },
      { nombre: "jack", sprite: "z_jack_olantern_paralitico.png" },
      { nombre: "skeleton", sprite: "z_special_skeleton.png" },
      { nombre: "skeleton_bandages", sprite: "z_special_skeleton_bandages.png" }
    ]
  }
};
