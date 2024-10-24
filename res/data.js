export const categories = [
  {
    id: 1,
    name: "Body Parts",
    number_of_lessons: 6,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/bodyparts.png"),
    imageStyle: {
      width: "70%",
      height: "90%",
      position: "absolute",
      right: 0,
      top: 15,
    },
  },
  {
    id: 2,
    name: "Cells",
    number_of_lessons: 10,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/cell.png"),
    imageStyle: {
      width: "100%",
      height: "100%"
    },
  },
  {
    id: 3,
    name: "Bones",
    number_of_lessons: 8,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/bone.png"),
    imageStyle: {
      width: "100%",
      height: "100%"
    },
  },
  {
    id: 4,
    name: "Physiology",
    number_of_lessons: 6,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/physiology.png"),
    imageStyle: {
      width: "70%",
      height: "90%"
    },
  },
  {
    id: 5,
    name: "Virus",
    number_of_lessons: 10,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/virus.png"),
    imageStyle: {
      width: "100%",
      height: "100%",
    },
  },
  {
    id: 6,
    name: "Tooth types",
    number_of_lessons: 8,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/teeth.png"),
    imageStyle: {
      width: "100%",
      height: "100%",
    },
  },
  {
    id: 7,
    name: "Bacteria",
    number_of_lessons: 8,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/bacteria.png"),
    imageStyle: {
      width: "70%",
      height: "90%",
      position: "absolute",
      right: 35,
      top: 20,
    },
  },
  {
    id: 8,
    name: "Tissues",
    number_of_lessons: 18,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/tissue.png"),
    imageStyle: {
      width: "90%",
      height: "70%",
    },
  },
  {
    id: 9,
    name: "Surgery",
    number_of_lessons: 20,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/surgery.png"),
    imageStyle: {
      width: "100%",
      height: "100%",
    },
  },
  {
    id: 10,
    name: "First aid",
    number_of_lessons: 20,
    vid: '',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna nec arcu dignissim mattis vitae vel ex" ,
    image: require("./images/categories/firstaid.png"),
    imageStyle: {
      width: "100%",
      height: "100%"
    },
  },
];

export const models = [
  {
    id: 1,
    name: "Inner Ear",
    normalImage: require("./images/categories/tissue.png"),
    labeled_model: require("./models/heart.glb"),
    unlabeled_model: require("./models/heart.glb"),
    type: "GLB",
    description:
      "inner ear, also called labyrinth of the ear, part of the ear that contains organs of the senses of hearing and equilibrium. The bony labyrinth, a cavity in the temporal bone, is divided into three sections: the vestibule, the semicircular canals, and the cochlea.",
    initialPosition: [0, 0, -1.5],
    materialsAvailable: false,
    sT: 2,
    dT: 2,
    sx: 0.11,
    sy: 0.1,
    sz: 0.1,
    rotation: [0, 0, 0],
    lightingEvironment: null,
    categoryId: 1,
    anotated: require("./images/categories/tissue.png"),
    functions:[
      {
        id: 1,
        name: 'Cerebrum',
        definition: 'This is the largest part of the brain and it is comopsed of right and left hemisperes',
        function: 'This is the largest part of the brain and it is comopsed of right and left hemisperes'
      },
      {
        id: 2,
        name: 'Cerebellum',
        definition: 'The phalanges are still all the types of things we talk about',
        function: 'The cerebellum (“little brain”) is a fist-sized portion of the brain located at the back of the head, below the temporal and occipital lobes and above the brainstem.'
      },
      {
        id: 3,
        name: 'BrainStem',
        definition: 'The phalanges are still all the types of things we talk about',
        function: 'The brainstem (middle of brain) connects the cerebrum with the spinal cord. The brainstem includes the midbrain, the pons and the medulla.'
      }
    ]
  },
  // {
  //   id: 2,
  //   name: "Brain",
  //   normalImage: require("./models/brain/brain.png"),
  //   labeled_model: require("./models/brain/brain.obj"),
  //   resources: [
  //     require("./models/brain/brain.mtl"),
  //   ],
  //   unlabeled_model: require("./models/brain/unlabeled_brain.obj"),
  //   unlabeled_resources: [
  //     require("./models/brain/unlabeled_brain.mtl"),
  //   ],
  //   type: "OBJ",
  //   description:
  //     "The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body. Together, the brain and spinal cord that extends from it make up the central nervous system, or CNS.",
  //   initialPosition: [0, 0, -1],
  //   materialsAvailable: true,
  //   material: {
  //     lightingModel: "PBR",
  //     diffuseTexture: require("./models/brain/textures/material_0_diffuse.png"),
  //     normalTexture: require("./models/brain/textures/material_0_normal.png"),
  //     specularTexture:  require("./models/brain/textures/material_0_specularGlossiness.png"),
  //   },
  //   sT: 2,
  //   dT: 2,
  //   sx: 0.6,
  //   sy: 0.6,
  //   sz: 0.6,
  //   rotation: [0, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/brain/anotated.png"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Cerebrum',
  //       definition: 'This is the largest part of the brain and it is comopsed of right and left hemisperes',
  //       function: 'This is the largest part of the brain and it is comopsed of right and left hemisperes'
  //     },
  //     {
  //       id: 2,
  //       name: 'Cerebellum',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'The cerebellum (“little brain”) is a fist-sized portion of the brain located at the back of the head, below the temporal and occipital lobes and above the brainstem.'
  //     },
  //     {
  //       id: 3,
  //       name: 'BrainStem',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'The brainstem (middle of brain) connects the cerebrum with the spinal cord. The brainstem includes the midbrain, the pons and the medulla.'
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   name: "Skull",
  //   normalImage: require("./models/skull/skull.png"),
  //   labeled_model: require("./models/skull/skull.glb"),
  //   unlabeled_model: require("./models/skull/skull.glb"),
  //   type: "GLB",
  //   description:
  //     "The heart is divided into four chambers. You have two chambers on the top (atrium, plural atria) and two on the bottom (ventricles), one on each side of the heart. Right atrium: Two large veins deliver oxygen-poor blood to your right atrium. The superior vena cava carries blood from your upper body",
  //   initialPosition: [0, 0, -12],
  //   materialsAvailable: false,
  //   sT: 2,
  //   dT: 2,
  //   sx: 1,
  //   sy: 1,
  //   sz: 1,
  //   rotation: [0, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/brain/anotated.png"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 2,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 3,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 4,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   name: "Digestive System",
  //   normalImage: require("./models/digestive_system/digestive_system.png"),
  //   labeled_model: require("./models/digestive_system/digestive_system.glb"),
  //   unlabeled_model: require("./models/digestive_system/unlabeled_digestive_system.glb"),
  //   type: "GLB",
  //   description:
  //     "The digestive system -- which can be up to 30 feet in length in adults -- is usually divided into eight parts: the mouth, the esophagus, the stomach, the small intestine (or 'small bowel') and the large intestine (also called 'large bowel' or 'colon') with the liver, pancreas, and gallbladder adding secretions to help digestion. These organs combine to perform six tasks: ingestion, secretion, propulsion, digestion, absorption, and defecation.",
  //   initialPosition: [0, 0, -5],
  //   materialsAvailable: false,
  //   sT: 2,
  //   dT: 2,
  //   sx: 2,
  //   sy: 2,
  //   sz: 2,
  //   rotation: [0, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/brain/anotated.png"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 2,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 3,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 4,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     }
  //   ]
  // },
  // {
  //   id: 5,
  //   name: "Heart",
  //   normalImage: require("./models/heart/heart.png"),
  //   labeled_model: require("./models/heart/heart.glb"),
  //   unlabeled_model: require("./models/heart/heart.glb"),
  //   type: "GLB",
  //   description:
  //     "The heart is divided into four chambers. You have two chambers on the top (atrium, plural atria) and two on the bottom (ventricles), one on each side of the heart. Right atrium: Two large veins deliver oxygen-poor blood to your right atrium. The superior vena cava carries blood from your upper body",
  //   initialPosition: [0, 0, -5],
  //   materialsAvailable: false,
  //   sT: 2,
  //   dT: 2,
  //   sx: 1,
  //   sy: 1,
  //   sz: 1,
  //   rotation: [-10, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/heart/anotated.jpg"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 2,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 3,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 4,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     }
  //   ]
  // },
  // {
  //   id: 5,
  //   name: "Eye",
  //   normalImage: require("./models/eye/eyeball.png"),
  //   labeled_model: require("./models/eye/eye.glb"),
  //   unlabeled_model: require("./models/eye/unlabeled_eye.glb"),
  //   type: "GLB",
  //   description:
  //     "The heart is divided into four chambers. You have two chambers on the top (atrium, plural atria) and two on the bottom (ventricles), one on each side of the heart. Right atrium: Two large veins deliver oxygen-poor blood to your right atrium. The superior vena cava carries blood from your upper body",
  //   initialPosition: [0, 0, -4],
  //   materialsAvailable: false,
  //   sT: 2,
  //   dT: 2,
  //   sx: 1,
  //   sy: 1,
  //   sz: 1,
  //   rotation: [0, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/eye/anotated.jpeg"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 2,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 3,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 4,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     }
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "Molar",
  //   normalImage: require("./models/teeth/teeth.png"),
  //   labeled_model: require("./models/teeth/teeth.glb"),
  //   unlabeled_model: require("./models/teeth/teeth.glb"),
  //   type: "GLB",
  //   description:
  //     "The heart is divided into four chambers. You have two chambers on the top (atrium, plural atria) and two on the bottom (ventricles), one on each side of the heart. Right atrium: Two large veins deliver oxygen-poor blood to your right atrium. The superior vena cava carries blood from your upper body",
  //   initialPosition: [0, 0, -4],
  //   materialsAvailable: false,
  //   sT: 2,
  //   dT: 2,
  //   sx: 1,
  //   sy: 1,
  //   sz: 1,
  //   rotation: [0, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/brain/anotated.png"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 2,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 3,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 4,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     }
  //   ]
  // },
  // {
  //   id: 7,
  //   name: "Skeletal Hand",
  //   normalImage: require("./models/skeleton_hand/skeleton_hand.png"),
  //   labeled_model: require("./models/skeleton_hand/skeletal_hand.glb"),
  //   unlabeled_model: require("./models/skeleton_hand/skeletal_hand.glb"),
  //   type: "GLB",
  //   description:
  //     "The hand has 27 bones: the carpals or wrist accounts for 8; the metacarpals or palm contains five; the remaining fourteen are digital bones; fingers and thumb. The palm has five bones known as metacarpal bones, one to each of the 5 digits. These metacarpals have a head, a shaft, and a base.",
  //   initialPosition: [0, 0, -5],
  //   materialsAvailable: false,
  //   sT: 2,
  //   dT: 2,
  //   sx: 0.5,
  //   sy: 0.5,
  //   sz: 0.5,
  //   rotation: [0, 0, 0],
  //   lightingEvironment: null,
  //   categoryId: 1,
  //   anotated: require("./models/brain/anotated.png"),
  //   functions:[
  //     {
  //       id: 1,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 2,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 3,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     },
  //     {
  //       id: 4,
  //       name: 'Phalanges',
  //       definition: 'The phalanges are still all the types of things we talk about',
  //       function: 'Gives the body a nice shape at least'
  //     }
  //   ]
  // }
];