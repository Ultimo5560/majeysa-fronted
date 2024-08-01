export const cakes = [
    // Pasteles de un piso
    ...Array.from({ length: 46 }, (v, i) => ({
        id: `cake_one_floor_${i + 1}`,
        number_floor: 1
    })),
    // Pasteles de dos pisos
    ...Array.from({ length: 14 }, (v, i) => ({
        id: `cake_two_floor_${i + 1}`,
        number_floor: 2
    })),
    // Pasteles de tres pisos
    ...Array.from({ length: 8 }, (v, i) => ({
        id: `cake_three_floor_${i + 1}`,
        number_floor: 3
    })),
    // Pasteles de cuatro pisos
    ...Array.from({ length: 4 }, (v, i) => ({
        id: `cake_four_floor_${i + 1}`,
        number_floor: 4
    }))
];