import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.svg";
import firstLogo from "../assets/Aminoven5.svg";
import secondLogo from "../assets/Aminoven10.svg";
import thirdLogo from "../assets/Aminomix-novum.svg";
import fourthLogo from "../assets/Aminosteril-N-Hepa.svg";
import fifthLogo from "../assets/Aminoven-infant10.svg";
import SixthLogo from "../assets/Dipeptiven-Glutamine.svg";
import SeventhLogo from "../assets/Omegaven.svg";
import EightLogo from "../assets/Smofkabiven.svg";
import NinethLogo from "../assets/SMOFlipid.svg";
import TenthLogo from "../assets/Intralipid.svg";
import firstLogoBottle from "../assets/Aminoven5-Bottle.svg";
import secondLogoBottle from "../assets/Aminoven10-Bottle.svg";
import thirdLogoBottle from "../assets/Aminomix-novum-bottle.png";
import fourthLogoBottle from "../assets/Aminoven-infant10-Bottle.png";
import fifthLogoBottle from "../assets/Aminoven-infant10-Bottle.png";
import SixthLogoBottle from "../assets/Dipeptiven-Glutamine-Bottle.png";
import SeventhLogoBottle from "../assets/Omegaven-Bottle.png";
import EightLogoBottle from "../assets/Smofkabiven-Bottle.png";
import NinethLogoBottle from "../assets/SMOFlipid-Bottle.png";
import TenthLogoBottle from "../assets/Intralipid-Bottle.png";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaCircleArrowUp } from "react-icons/fa6";

const Page1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Features");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

    const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const tabScrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const [brandArray, setbrandArray] = useState([
    {
      logo: firstLogo,
      bottle: firstLogoBottle,
      name: "Aminoven 5%",
      features: [
        "Contains a balanced pattern of non-essential and conditionally essential amino acids​",
        "The only standard amino acid solution containing taurine which is  conditionally essential​",
        "Meets the requirements for essential and branched chain amino acids​",
        'Provides high biological value of 136 based on "Potato-egg  principle"',
      ],
      indication: [
        "For supply of amino acids as part of a parenteral nutrition regimen. Amino acid solutions should be administered generally in combination with adequate amount of energy supplements.​",
      ],
      dosage: [
        "Aminoven 5%, 500 ml glass bottle , 16-20 ml/kg body wt  (equivalent to 0.8-1.0 g AA/kg body wt)​",
        "Aminoven 10% , 500 ml glass bottle, 10-20 ml/kg body wt (equivalent to 1.0-2.0 g AA/kg body wt.)​",
      ],
      benefits: [
        "Amino acid composition based upon established solutions with proved nutritional efficacy and excellent tolerance and supports better protein synthesis​",
        "Taurine  is conditionally essential amino acid in critical illness, trauma , sepsis, cancer, radiation and chemotherapy​",
        "Taurine also has immune-modulatory effects and may alleviate cholestasis in post-operative patients​",
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "500 ml" },
            { key: "Amino Acid", value: "25 g" },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "Nil" },
            { key: "NPE Kcals", value: "Nil" },
            { key: "Total Kcal", value: "100 kcal" },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "41%" },
            { key: "NEAA", value: "59%" },
            { key: "BCAA", value: "18.28%" },
            { key: "Total Nitrogen", value: "8.1 g/I" },
            { key: "Osmolarity(mosmol/I)", value: "495" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Neonates, liver/Renal infusufficiency,metabolic disorders",
            },
            { key: "Route of adminstration", value: "Peripheral/Central" },
            { key: "Max. Infusion rate", value: "2 ml/Kg/hr" },
            { key: "MAX dosage", value: "1-2 g/kg/day" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Nil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: secondLogo,
      bottle: secondLogoBottle,
      name: "Aminoven 10%",
      features: [
        "Contains a balanced pattern of non-essential and conditionally essential amino acids​",
        "The only standard amino acid solution containing taurine which is  conditionally essential​",
        "Meets the requirements for essential and branched chain amino acids​",
        'Provides high biological value of 136 based on "Potato-egg  principle"',
      ],
      indication: [
        "For supply of amino acids as part of a parenteral nutrition regimen. Amino acid solutions should be administered generally in combination with adequate amount of energy supplements.​",
      ],
      dosage: [
        "Aminoven 5%, 500 ml glass bottle , 16-20 ml/kg body wt  (equivalent to 0.8-1.0 g AA/kg body wt)​",
        "Aminoven 10% , 500 ml glass bottle, 10-20 ml/kg body wt (equivalent to 1.0-2.0 g AA/kg body wt.)​",
      ],
      benefits: [
        "Amino acid composition based upon established solutions with proved nutritional efficacy and excellent tolerance and supports better protein synthesis​",
        "Taurine  is conditionally essential amino acid in critical illness, trauma , sepsis, cancer, radiation and chemotherapy​",
        "Taurine also has immune-modulatory effects and may alleviate cholestasis in post-operative patients​",
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "500 ml" },
            { key: "Amino Acid", value: "50 g" },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "Nil" },
            { key: "NPE Kcals", value: "Nil" },
            { key: "Total Kcal", value: "200 kcal" },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "41%" },
            { key: "NEAA", value: "59%" },
            { key: "BCAA", value: "18.28%" },
            { key: "Total Nitrogen", value: "16.2 g/I" },
            { key: "Osmolarity(mosmol/I)", value: "990" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Neonates, liver/Renal infusufficiency,metabolic disorders",
            },
            { key: "Route of adminstration", value: "Peripheral/Central" },
            { key: "Max. Infusion rate", value: "1 ml/Kg/hr" },
            { key: "MAX dosage", value: "1-2 g/kg/day" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Nil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: thirdLogo,
      bottle: thirdLogoBottle,
      name: "Aminomix Novum",
      features: [
        "Aminomix Novum is a standardized parenteral nutrition formula, designed to meet the daily nutritional requirements of nitrogen (amino acids), glucose, electrolytes and fluid in adult and paediatric patients (>2 yrs) in whom oral or enteral feeding is impossible, insufficient or contraindicated.",
        "With its high content of amino acids (50 g per liter) Aminomix Novum suits even the elevated nitrogen requirements of intensive care patients. Total calories provided by Aminomix Novum is 1000kcal.",
        "Aminomix Novum contains taurine, which is supposable conditionally essential in critical illness1, trauma2 and sepsis3.",
        "The Aminomix Novum nutrition regimen may be complemented by adding a lipid emulsion of choice - in amounts as needed. This allows to flexibly adjust the glucose: lipid ratio of non-protein energy, depending on the individual glucose tolerance of the patient.",
        "Aminomix Novum for patients with high energy requirements, good glucose tolerance and normal electrolyte balance. (After mixing: 5% amino acids, 20% glucose and the complete electrolyte spectrum)",
        "Container: Aminomix Novum formula is available in infusion bags in (1000 ml). The bag may be stored at room temperature for up to 24 months.",
        "Aminomix provides zinc and organic glycerol phosphate.",
      ],
      indication: [
        "A standard parenteral nutrition preparation is adequate for the majority of patients who need intravenous feeding e.g. after surgery or trauma, patients with sepsis, gastrointestinal disease or short bowel syndrome, during cancer treatment and in many other clinical situations.",
      ],
      dosage: [
        <>
          <strong>
            Adults (including the elderly) and adolescents older than 14 years
            of age
          </strong>{" "}
          Unless otherwise prescribed,
        </>,
        {
          title: "20 ml per kg bodyweight per day",
          subpoints: [
            "1 g amino acid and 4 g glucose/kg bodyweight per day",
            "1400 ml/day in a patient weighing 70 kg.",
          ],
        },
        <>
          <strong>Children and adolescents less than 14 years of age</strong>
        </>,
        {
          title:
            "Daily dose for children 2 years and older and less than 5 years of age:",
          subpoints: [
            "25ml/kg  body weight ~ 1.25 g amino acids and 5 g glucose/kg body weight/day",
          ],
        },
        {
          title:
            "Daily dose for children 5 years and older and less than 14 years of age:",
          subpoints: [
            "20ml/kg  body weight ~ 1 g amino acids and 4 g glucose/kg body weight/day",
          ],
        },
      ],
      benefits: [
        "Two Chamber Bags (2 CBs) are designed to provide parenteral nutrition admixtures with glucose and amino acids via central administration for primarily adult patients.",
        "Amino acids and glucose with and without electrolytes are stored in 2 separate compartments of a plastic bag (2 CB) which is of benefit for the shelf life of the product.",
        "Shortly before administration the seals will be opened and the two solutions are mixed.",
        "2 CBs are convenient and safe in handling, providing the flexibility to make additions such as lipid emulsions, trace elements and vitamins. Their variety of nutritional regimens can be used for a wide range of metabolic conditions.",
        "Compared to 3 CBs the 2 CBs provide the flexibility to add different lipids.",
        {
          title: "The 2 CB concept has some advantages :",
          subpoints: [
            "It provides flexibility to add varying types and amounts of lipid emulsions according to the patient’s needs, the physicians’ preference and product availability. However, the gain in flexibility results in less convenience compared to 3 CBs. e.g. in case a reduced lipid supply is an option, in case of a continuous sedation with propofol",
            "Zinc improves the wound healing is essential for immunity and is needed for a positive nitrogen balance",
            "The supply of electrolytes within the formulation of  Aminomix Novum gives the possibility  to reduce the number of manipulations",
          ],
        },
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "1000 ml" },
            { key: "Amino Acid", value: "50 g" },
            { key: "Glucose", value: "200 g" },
            { key: "Fat", value: "Nil" },
            { key: "NPE Kcals", value: "800 Kcals" },
            { key: "Total Kcal", value: "1000 kcal" },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "41%" },
            { key: "NEAA", value: "59%" },
            { key: "BCAA", value: "18.28%" },
            { key: "Total Nitrogen", value: "8 g/I" },
            { key: "Osmolarity(mosmol/I)", value: "1779" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "50" },
            { key: "K⁺", value: "40" },
            { key: "Ca²⁺", value: "2.5" },
            { key: "Mg²⁺", value: "2.5" },
            { key: "Zn²⁺", value: "0.04" },
            { key: "Cl⁻", value: "100.1" },
            { key: "Glycero-phosphate", value: "15" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "22.8" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Liver/Renal Insufficiency,metabolic disorders,severe insullin resistant hyperglycemia",
            },
            { key: "Route of adminstration", value: "Central" },
            { key: "Max. Infusion rate", value: "1.25 ml/Kg/hr" },
            { key: "MAX dosage", value: "30 g/kg/day" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Nil" },
            { key: "Presentation", value: "2 Chamber Bag" },
          ],
        },
      ],
    },
    {
      logo: fourthLogo,
      bottle: fourthLogoBottle,
      name: "Aminosteril N Hepa",
      features: [
        "Complete and balanced amino acid profile for effective hepatic encephalopathy treatment",
        "High concentration of branched chain AA and reduced concentration of aromatic AA",
        "Low methionine concentration",
        "High arginine concentration",
        "Effective in maintaining a nitrogen balance",
        "Normalization of pathological plasma amino acid levels",
        "Reduced likelihood of metabolically produced toxic amines",
      ],
      indication: [
        "Supply of amino acids as part of a parenteral nutrition in  severe forms of hepatic insufficiency with and without  hepatic encephalopathy when oral or enteral nutrition is  impossible or insufficient or contraindicated",
      ],
      dosage: [
        "Aminosteril 8% N-Hepa ,500 ml glass bottle,1.0 – 1.25 ml/kg body wt/hr (=0.08 – 0.1 g amino acids/kg body wt/hr)",
      ],
      benefits: [
        "Normalization of the pathological plasma amino acid levels in patients with hepatic  insufficiency",
        "High arginine content to enhance urea production and improve systemic ammonia clearance",
        "Helps reducing hyperammonaemia effect and further exposure to hepatic encephalopathy",
        "Improves nitrogen balance",
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "500 ml" },
            { key: "Amino Acid", value: "40 g" },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "Nil" },
            { key: "NPE Kcals", value: "Nil" },
            { key: "Total Kcal", value: "160 kcal" },
            { key: "Taurine", value: "Nil" },
            { key: "EAA", value: "59.4%" },
            { key: "NEAA", value: "40.6%" },
            { key: "BCAA", value: "42% & 2% AAA" },
            { key: "Total Nitrogen", value: "12.9 g/I" },
            { key: "Osmolarity(mosmol/I)", value: "770" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value: "As per all Aminoacid preparation",
            },
            { key: "Route of adminstration", value: "Peripheral" },
            { key: "Max. Infusion rate", value: "1.25 ml/Kg/hr" },
            { key: "MAX dosage", value: "1.5 g/kg/day" },
            { key: "Shelf Life", value: "36" },
            { key: "Type TG", value: "Nil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: fifthLogo,
      bottle: fifthLogoBottle,
      name: "Aminoven Infant 10%",
      features: [
        "An amino acid solution for parenteral nutrition of preterm & term newborns, babies , infants and young children​",
        "Excellent nutritional efficacy for growth and development, with high tolerance and safety.​",
        {
          title: "Contains a well-balanced amino acids pattern with:",
          subpoints: [
            "52% essential amino acids",
            "Taurine which is an essential nutrient for neonates",
            "Cysteine & tyrosine that are not synthesized in sufficient amounts",
            "Low contents of methionine & phenylalanine due to their limited degradation rate",
          ],
        },
      ],
      indication: [
        "For partial parenteral nutrition of infants (preterm and term  newborns, babies) and young Children.",
        "May serve as part of total parenteral nutrition together with carbohydrates and fat as energy source, and vitamins, electrolytes and trace elements​",
      ],
      dosage: [
        "Aminoven 10%,100 ml bottle​",
        {
          title: "Age of 1 yr:",
          subpoints: [
            "1.5 – 2.5 g amino acids/kg body wt = 15 -25 ml/ kg body wt​",
          ],
        },
        {
          title: "Age of 2-5 yrs:",
          subpoints: ["1.5 g amino acids/kg body wt =15 ml/kg body wt​​"],
        },
        {
          title: "Age of 6-14yrs:",
          subpoints: ["1.0 g amino acids/kg body wt =10 ml/kg body wt​​​"],
        },
      ],
      benefits: [
        {
          title:
            "Designed to meet special amino acid requirement of pediatric patients which are characterized by",
          subpoints: [
            "High need for essential amino acids to ensure normal growth​",
            "Metabolic immaturity​",
            "Taurine is essential for retinal development​",
            "Taurine also enhance  bile acid / bile acid flow, thus reducing hepatic insufficiency and cholestasis​",
            "Low capacity to compensate for metabolic inadequate amino acid intake​",
          ],
        },
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "100 ml" },
            { key: "Amino Acid", value: "10 g" },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "Nil" },
            { key: "NPE Kcals", value: "Nil" },
            { key: "Total Kcal", value: "40 kcal" },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "52%" },
            { key: "NEAA", value: "48%" },
            { key: "BCAA", value: "30%" },
            { key: "Total Nitrogen", value: "14.9 g/I" },
            { key: "Osmolarity(mosmol/I)", value: "885" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value: "Liver/Renal insufficiency,metabolic disorders",
            },
            { key: "Route of adminstration", value: "Central" },
            { key: "Max. Infusion rate", value: "1 ml/Kg/hr" },
            { key: "MAX dosage", value: "0.5-3 g/kg/day" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Nil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: SixthLogo,
      bottle: SixthLogoBottle,
      name: "Dipeptiven Glutamine",
      features: [
        "Available as L-alanyl-L-glutamine dipeptide in 20% 50ml and 100 ml solution​",
        "Glutamine is conditionally essential amino acid for use in highly catabolic patients​",
        "Glutamine forms 60% of free amino acid pool in the muscles and should be administered as part of amino acid supplementation in parental nutrition​",
        "Dipeptide technology ensures stability on heat sterilization​",
        {
          title: "Systemic role of glutamine:​",
          subpoints: [
            "Supports glutathione synthesis",
            "Increases cellular defence mechanism",
            "Fuel for Entrocytes and immune cells​",
            "Is a nitrogen donor​",
            "Reduces insulin resistance​",
          ],
        },
      ],
      indication: [
        <>
          Dipeptiven is indicated{" "}
          <strong>
            as part of an intravenous parenteral nutrition regimen{" "}
          </strong>{" "}
          as a supplement to amino acid solutions or an amino acid containing
          infusion regimen, e.g. in patients in hypercatabolic and/or
          hypermetabolic states​,
        </>,
      ],
      dosage: [
        {
          title: "Dipeptiven 20%, 50ml and 100ml glass bottles​",
          subpoints: [
            "Depends on severity of the catabolic state & on amino acid requirement​",
            "1.5 -2.5 ml/kg body wt. (=100 to 175 ml Dipeptiven for a patient of 70 kg body weight)​",
            "Rate of infusion should not exceed 0.1g amino acids/kg body wt./hr​",
            "Duration of use should not exceed 3 weeks​",
            "Not designed for direct administration​",
            "Should be mixed with a compatible amino acid carrier solution or an amino acid containing infusion regimen​",
            "2g amio acids/kg body wt. should not be exceeded in PN​",
            "Proportion of amino acid supplied through Dipeptiven should not exceed ~30% of total amino acid​",
            "2.5ml or 0.5g N(2)-L-alanyl-L-glutamine of Dipeptiven per kg body weight.​",
          ],
        },
      ],
      benefits: [
        "May improve survival rate and reduce 6-month mortality rate​",
        "Reduced length of hospital stay​",
        "Reduced infectious complications​",
        "Reduced rates of hyperglycemia​",
        "Gut integrity maintained​",
        "Improved nitrogen balance​",
        "Strengthened immune defense​",
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "50 ml 100ml" },
            {
              key: "Amino Acid",
              value: "Per ml,82.0 mg L-alanine & 134.6 mg L-glutamine",
            },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "Nil" },
            { key: "NPE Kcals", value: "Nil" },
            {
              key: "Total Kcal",
              value: "40 & 80 kcal(Not intended for energy)",
            },
            { key: "Taurine", value: "Nil" },
            { key: "EAA", value: "Nil" },
            { key: "NEAA", value: "Nil" },
            { key: "BCAA", value: "Nil" },
            { key: "Total Nitrogen", value: "1.9 and 3.8 g resp." },
            { key: "Osmolarity(mosmol/I)", value: "921" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Severe Renal insufficiency (CrCl<25ml/mi) Severe Hepatic insufficiency",
            },
            { key: "Route of adminstration", value: "Peripheral/Central" },
            {
              key: "Max. Infusion rate",
              value:
                "Depends on carrier solution & should not exceed 0.1 g AA/kg/hr",
            },
            { key: "MAX dosage", value: "2.5 ml eg.to 0.5 g/kg/day" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Nil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: SeventhLogo,
      bottle: SeventhLogoBottle,
      name: "Omegaven",
      features: [
        <>
          <strong>10% natural fish oil</strong> emulsion supplement – the only
          one on the market
        </>,
        "Optimizes the fatty acid pattern in parenteral nutrition",
        <>
          High percentage of very long-chain{" "}
          <strong>omega -3 fatty acids</strong>
        </>,
        "Should be administered in combination with other lipid emulsions (Intralipid) or 3 CBs (Kabiven)",
        <>
          <strong>Flexible dosage</strong>
        </>,
      ],
      dosage: [
        "1 ml up to max. 2 ml Omegaven/kg body weight​",
        "The infusion rate should not exceed 0.5 ml Omegaven/kg body weight/hour be administered simultaneously with other fat emulsions​",
        "Recommended total daily lipid intake of 1 - 2 g/kg body weight, the fish oil portion from Omegaven should constitute 10 - 20% of this intake​",
      ],
      indication: [
        {
          title: "Omegaven as supplement in PN is indicated:",
          subpoints: [
            "Parenteral nutrition supplementation with long chain omega-3-fatty acids, especially eicosapentaenoic and docosahexaenoic acid, when oral or enteral nutrition is impossible, insufficient or contraindicated.​",
          ],
        },
      ],
      benefits: [
        {
          title: (
            <>
              <strong>
                Especially following patient groups can benefit most from
                Omegaven:
              </strong>
              ​
            </>
          ),
          subpoints: [
            "Post-traumatic & post surgical",
            "With different stages of abdominal & non-abdominal sepsis/SIRS​",
            "With peritonitis",
            "Whose immune function is in need of support​",
            "At risk of any chronic or acute hyper-inflammatory process​",
          ],
        },
        <>
          Omega 3 PUFA-enriched lipid emulsions are associated with a
          statistically and clinically significant{" "}
          <strong>reduction in infection</strong> rate and{" "}
          <strong>length of ICU</strong> and <strong>hospital stay</strong>​
        </>,
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "50 ml" },
            { key: "Amino Acid", value: "Nil" },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "5 g Fish Oil" },
            { key: "NPE Kcals", value: "Nil" },
            { key: "Total Kcal", value: "56 kcal(Not intended for energy)" },
            { key: "Taurine", value: "Nil" },
            { key: "EAA", value: "Nil" },
            { key: "NEAA", value: "Nil" },
            { key: "BCAA", value: "Nil" },
            { key: "Total Nitrogen", value: "Nil" },
            { key: "Osmolarity(mosmol/I)", value: "273" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value: "Impaired lipid metabolism, unstable diabetes mellitus",
            },
            { key: "Route of adminstration", value: "Peripheral" },
            { key: "Max. Infusion rate", value: "Upto 0.5 ml/Kg/hr" },
            { key: "MAX dosage", value: "1-2 ml/kg/d i.e 0.1 - 0.2g FO/kg/d" },
            { key: "Shelf Life", value: "18" },
            { key: "Type TG", value: "Fish Oil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: EightLogo,
      bottle: EightLogoBottle,
      name: "Smofkabiven",
      features: [
        "The SmofKabiven® range is the latest generation of Fresenius Kabi’s 3CBs. It sets new handling and safety standards and provides clinical advantages from its composition and components (since 2018 in Indian market)​",
        {
          title:
            "Available in different sizes with electrolytes, peripheral and central version SMOFlipid®:",
          subpoints: [
            "benefits of the unique 4-oil combination",
            "Range & bag: 6 different formulations are available in FMCB​",
            "Central  - 986 ml, 1477 ml, 1970 ml​",
            "Peripheral - 1206 ml, 1448 ml, 1904 ml",
          ],
        },
      ],
      indication: [
        "SmofKabiven ® is indicated in adult patients, when oral or enteral nutrition is impossible, insufficient or contraindicated.​",
        "SmofKabiven® central is indicated in Patients undergoing major surgery,critically ill, oncology, BMT,liver transplant on PN Patients in need of immunomodulating and anti-inflammatory nutritional treatment​",
        "Patients in need of rapidly available energy",
        "Patients with high nitrogen requirements​",
        "Patients at risk of and with already increased liver parameters",
        "Patients on long-term PN (respectively)",
        "Due to the beneficial impact on the liver parameters",
        "SmofKabiven® peripheral All patients on complete PN with basic to moderate nitrogen and energy requirements at ward level or patients without central line Patients on partial PN",
        "Patients in need of immunomodulating and anti-inflammatory nutritional treatment​",
        "Patients in need of rapidly available energy",
        "Patients at risk of and with already increased liver parameters",
      ],
      dosage: [
        "The dosage range of 13 ml – 31 ml SmofKabiven Electrolyte Free/kg bw/day corresponds to 0.10-0.25 g nitrogen/kg bw/day (0.6-1.6 g amino acids/kg bw/day) and 14-35 kcal/kg bw/day of total energy (12-27 kcal/kg bw/day of non-protein energy). This covers the need of the majority of the patients. In obese patients the dose should be based on the estimated ideal weight.​",
      ],
      infusion: [
        "The maximum infusion rate for glucose is 0.25 g/kg bw/h, for amino acid 0.1 g/kg bw/h, and for fat 0.15 g/kg bw/h.​",
        "The infusion rate should not exceed 2.0 ml/kg bw/h (corresponding to 0.25 g glucose, 0.10 g amino acids, and 0.08 g fat/kg bw/h). The recommended infusion period is 14-24 hours.​",
      ],
    },
    {
      logo: NinethLogo,
      bottle: NinethLogoBottle,
      name: "SMOFlipid",
      features: [
        "The unique, well-balanced lipid emulsion with purified natural fish oil",
        "30% soybean oil as reliable source of essential fatty acids",
        "30% medium-chain triglycerides (MCT) as source of rapidly available energy",
        "25% olive oil for supply of monounsaturated fatty acids, especially oleic acid",
        "15% fish oil provides ω-3 fatty acids, eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA)",
        "Additionally vitamin E (approximately 200 mg a-tocopherol/L)",
        "Fatty acid pattern with respect to saturated fatty acids, monounsaturated fatty acids, and essential fatty acids is similar to human milk",
        "Extensive compatibility and stability data are available with a wide range of admixtures",
      ],
      indication: [
        "SMOFlipid is indicated in patients who needs intravenous nutrition to supply energy, essential fatty acids and omega-3 fatty acids",
      ],
      dosage: [
        {
          title: "20% SMOF, (100ml, 250ml, 500ml) glass bottle",
          subpoints: [
            "Adult: Standard dose: 1.0 – 2.0 g fat/kg body wt",
            "Neonates & infants: 0.5 – 1.0g fat/kg body wt/day, Followed by: 0.5 -1.0 g fat/kg body wt/day up to 3.0 g fat/kg body wt/day",
            "Children: It is recommended not to exceed a daily dose of 3 g fat/kg body wt/day.  Daily dose gradually increased during first week",
          ],
        },
      ],
      benefits: [
        "Positive impact on liver cell function and integrity",
        "Favourable immune and inflammatory response",
        "For adequate antioxidative protection",
        "To prevent antioxidant depletion",
        "Reduced length of hospital stay",
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "100ml" },
            {
              key: "Amino Acid",
              value: "Nil",
            },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "20 g" },
            { key: "NPE Kcals", value: "Nil" },
            {
              key: "Total Kcal",
              value: "200 Kcal",
            },
            { key: "Taurine", value: "Nil" },
            { key: "EAA", value: "Nil" },
            { key: "NEAA", value: "Nil" },
            { key: "BCAA", value: "Nil" },
            { key: "Total Nitrogen", value: "Nil" },
            { key: "Osmolarity(mosmol/I)", value: "290" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Liver & Renal insufficiency, High Triglyceride levels,Uncorntrolled Diabetes Mellitus",
            },
            { key: "Route of adminstration", value: "Peripheral" },
            {
              key: "Max. Infusion rate",
              value: "0.75 ml/Kg/hr",
            },
            {
              key: "MAX dosage",
              value: "Adult: upto 10 ml/Kg/day Paeds: upto 15 ml/Kg/day",
            },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Soya, MCT,Olive and fish Oil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
        {
          type: "table",
          rows: [
            { key: "Volume", value: "250ml" },
            {
              key: "Amino Acid",
              value: "Nil",
            },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "50 g" },
            { key: "NPE Kcals", value: "Nil" },
            {
              key: "Total Kcal",
              value: "500 Kcal",
            },
            { key: "Taurine", value: "Nil" },
            { key: "EAA", value: "Nil" },
            { key: "NEAA", value: "Nil" },
            { key: "BCAA", value: "Nil" },
            { key: "Total Nitrogen", value: "Nil" },
            { key: "Osmolarity(mosmol/I)", value: "290" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Liver & Renal insufficiency, High Triglyceride levels,Uncorntrolled Diabetes Mellitus",
            },
            { key: "Route of adminstration", value: "Peripheral" },
            {
              key: "Max. Infusion rate",
              value: "0.75 ml/Kg/hr",
            },
            {
              key: "MAX dosage",
              value: "Adult: upto 10 ml/Kg/day Paeds: upto 15 ml/Kg/day",
            },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Soya, MCT,Olive and fish Oil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
        {
          type: "table",
          rows: [
            { key: "Volume", value: "500ml" },
            {
              key: "Amino Acid",
              value: "Nil",
            },
            { key: "Glucose", value: "Nil" },
            { key: "Fat", value: "100 g" },
            { key: "NPE Kcals", value: "Nil" },
            {
              key: "Total Kcal",
              value: "1000 Kcal",
            },
            { key: "Taurine", value: "Nil" },
            { key: "EAA", value: "Nil" },
            { key: "NEAA", value: "Nil" },
            { key: "BCAA", value: "Nil" },
            { key: "Total Nitrogen", value: "Nil" },
            { key: "Osmolarity(mosmol/I)", value: "290" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "Nil" },
            { key: "K⁺", value: "Nil" },
            { key: "Ca²⁺", value: "Nil" },
            { key: "Mg²⁺", value: "Nil" },
            { key: "Zn²⁺", value: "Nil" },
            { key: "Cl⁻", value: "Nil" },
            { key: "Glycero-phosphate", value: "Nil" },
            { key: "Acetate", value: "Nil" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "Nil" },
            {
              key: "Relative Contraindiction",
              value:
                "Liver & Renal insufficiency, High Triglyceride levels,Uncorntrolled Diabetes Mellitus",
            },
            { key: "Route of adminstration", value: "Peripheral" },
            {
              key: "Max. Infusion rate",
              value: "0.75 ml/Kg/hr",
            },
            {
              key: "MAX dosage",
              value: "Adult: upto 10 ml/Kg/day Paeds: upto 15 ml/Kg/day",
            },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Soya, MCT,Olive and fish Oil" },
            { key: "Presentation", value: "Glass Bottle" },
          ],
        },
      ],
    },
    {
      logo: TenthLogo,
      bottle: TenthLogoBottle,
      name: "Intralipid",
      features: [
        "Intravenous nutrition to supply energy and essential fatty acids",
        "Patients with essential fatty acid deficiency (EFAD) who cannot maintain or restore a normal essential fatty acid pattern by oral intake",
      ],
      indication: [
        "Indicated in patients needing intravenous nutrition to supply energy and essential fatty acids. Intralipid is also indicated in patients with essential fatty acid deficiency (EFAD) who cannot maintain or restore a normal essential fatty acid pattern by oral intake.",
        "Paediatric indication for Intralipid 10% and 20%.",
      ],
      dosage: [
        "10%,20%,30% Intralipid, (100ml, 250ml and 500ml) glass bottles",
        "Prematures and low birthweight neonates:  0.5-1 g/kg body wt/day followed by a successive  increase by 0.5-1 g/kg body wt/day up to 2g/kg bw/day.",
        "Neonates and infants: 0.5-4 g TG/kg body wt/day.",
        "Adults : up to 3 g TG/kg body wt/day",
      ],
      benefits: [
        "Minimizes hyperglycemia",
        "Reduces metabolic stress",
        "Improves protein utilisation",
        "Prevents fatty infiltration of the liver",
        "Preserves hepatic function",
        "Reduces respiratory stress",
      ],
      "product details": [
        {
          type: "table",
          rows: [
            { key: "Volume", value: "986 ml" },
            {
              key: "Amino Acid",
              value: "50 g",
            },
            { key: "Glucose", value: "125 g" },
            { key: "Fat", value: "38 g" },
            { key: "NPE Kcals", value: "900 Kcals" },
            {
              key: "Total Kcal",
              value: "1100 Kcal",
            },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "41%" },
            { key: "NEAA", value: "59%" },
            { key: "BCAA", value: "19%" },
            { key: "Total Nitrogen", value: "8 g" },
            { key: "Osmolarity(mosmol/I)", value: "1500" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "40" },
            { key: "K⁺", value: "30" },
            { key: "Ca²⁺", value: "2.5" },
            { key: "Mg²⁺", value: "5" },
            { key: "Zn²⁺", value: "0.04" },
            { key: "Cl⁻", value: "35" },
            { key: "Glycero-phosphate", value: "12" },
            { key: "Acetate", value: "104" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "5" },
            {
              key: "Relative Contraindiction",
              value: "Neonates, liver/Renal insufficiency,metabolic disorders",
            },
            { key: "Route of adminstration", value: "Central" },
            {
              key: "Max. Infusion rate",
              value: "Upto 2 ml/kg/hr",
            },
            { key: "MAX dosage", value: "Upto 35 ml/kg/hr" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Soya,MCT,Olive and fish Oil" },
            { key: "Presentation", value: "3 Chamber Bag" },
          ],
        },
        {
          type: "table",
          rows: [
            { key: "Volume", value: "1477 ml" },
            {
              key: "Amino Acid",
              value: "75 g",
            },
            { key: "Glucose", value: "187 g" },
            { key: "Fat", value: "56 g" },
            { key: "NPE Kcals", value: "1300 Kcals" },
            {
              key: "Total Kcal",
              value: "1600 Kcal",
            },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "41%" },
            { key: "NEAA", value: "59%" },
            { key: "BCAA", value: "19%" },
            { key: "Total Nitrogen", value: "12 g" },
            { key: "Osmolarity(mosmol/I)", value: "1500" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "60" },
            { key: "K⁺", value: "45" },
            { key: "Ca²⁺", value: "3.8" },
            { key: "Mg²⁺", value: "7.5" },
            { key: "Zn²⁺", value: "0.06" },
            { key: "Cl⁻", value: "52" },
            { key: "Glycero-phosphate", value: "19" },
            { key: "Acetate", value: "157" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "7.5" },
            {
              key: "Relative Contraindiction",
              value: "Neonates, liver/Renal insufficiency,metabolic disorders",
            },
            { key: "Route of adminstration", value: "Central" },
            {
              key: "Max. Infusion rate",
              value: "Upto 2 ml/kg/hr",
            },
            { key: "MAX dosage", value: "Upto 35 ml/kg/hr" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Soya,MCT,Olive and fish Oil" },
            { key: "Presentation", value: "3 Chamber Bag" },
          ],
        },
        {
          type: "table",
          rows: [
            { key: "Volume", value: "1970 ml" },
            {
              key: "Amino Acid",
              value: "100 g",
            },
            { key: "Glucose", value: "250 g" },
            { key: "Fat", value: "75 g" },
            { key: "NPE Kcals", value: "1800 Kcals" },
            {
              key: "Total Kcal",
              value: "2200 Kcal",
            },
            { key: "Taurine", value: "Yes" },
            { key: "EAA", value: "41%" },
            { key: "NEAA", value: "59%" },
            { key: "BCAA", value: "19%" },
            { key: "Total Nitrogen", value: "12 g" },
            { key: "Osmolarity(mosmol/I)", value: "1500" },
            { key: "Electrolytes", value: "" },
            { key: "Na⁺", value: "80" },
            { key: "K⁺", value: "60" },
            { key: "Ca²⁺", value: "5" },
            { key: "Mg²⁺", value: "10" },
            { key: "Zn²⁺", value: "0.08" },
            { key: "Cl⁻", value: "70" },
            { key: "Glycero-phosphate", value: "25" },
            { key: "Acetate", value: "209" },
            { key: "Malate", value: "Nil" },
            { key: "Sulphate", value: "10" },
            {
              key: "Relative Contraindiction",
              value: "Neonates, liver/Renal insufficiency,metabolic disorders",
            },
            { key: "Route of adminstration", value: "Central" },
            {
              key: "Max. Infusion rate",
              value: "Upto 2 ml/kg/hr",
            },
            { key: "MAX dosage", value: "Upto 35 ml/kg/hr" },
            { key: "Shelf Life", value: "24" },
            { key: "Type TG", value: "Soya,MCT,Olive and fish Oil" },
            { key: "Presentation", value: "3 Chamber Bag" },
          ],
        },
      ],
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setTimeout(() => {
      setSelectedIndex(index);
      setActiveTab("Features");
      setIsOpen(false);
      scrollTabs(-500)
      setShowLeftArrow(false)
      setShowRightArrow(false)
      setSelectedItem(selectedItem === index ? index : index);
    }, 100);
  };

  const handleTabScroll = () => {
    const el = tabScrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollTabs = (offset) => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleTabScroll(); // Initial check
    window.addEventListener("resize", handleTabScroll);
    return () => window.removeEventListener("resize", handleTabScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsScrolled(latest > 0.2);
    });

    return () => unsubscribe(); // clean up
  }, [scrollYProgress]);

  const tabs = [
    "Features",
    "Indication",
    "Dosage",
    "Benefits",
    "Infusion",
    "Product Details",
  ];

  const [showScrollButton, setShowScrollButton] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderTabContent = () => {
    const brand = brandArray[selectedItem];
    const content = brand[activeTab.toLowerCase()] || [];

    return (
      <>
        {content.map((item, index) => {
          if (typeof item === "object" && item.title && item.subpoints) {
            // Handle nested subpoints structure
            return (
              <div key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block w-3 h-3 bg-[#13275F] mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-[17px]">
                    {item.title}
                  </span>
                </motion.div>
                <ul className="pl-6 mt-2 space-y-2">
                  {item.subpoints.map((subpoint, subIndex) => (
                    <motion.li
                      key={subIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (index + subIndex + 1) * 0.05 }}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 bg-[#13275F] mr-2 mt-1.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[17px]">
                        {subpoint}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            );
          } 
          
          else if (item.type === "table" && Array.isArray(item.rows)) {
            const electrolytesStartIndex = item.rows.findIndex(
              (row) => row.key === "Electrolytes"
            );

            const normalRows = item.rows.slice(0, electrolytesStartIndex);
            const electrolyteRows = item.rows.slice(
              electrolytesStartIndex + 1,
              electrolytesStartIndex + 11
            );
            const remainingRows = item.rows.slice(electrolytesStartIndex + 11);

            return (
              <div key={index} className="mb-4 overflow-x-auto">
                <table className="w-full max-w-xl border border-gray-300 table-fixed text-[15px]">
                  <tbody>
                    {/* Normal rows before electrolytes */}
                    {normalRows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-gray-200">
                        <td className="p-2 text-left text-gray-700 font-medium w-1/2 border-r border-gray-300 break-words whitespace-normal overflow-hidden">
                          {row.key}
                        </td>
                        <td className="p-2 text-right text-gray-600 w-1/2 break-words whitespace-normal overflow-hidden">
                          {row.value}
                        </td>
                      </tr>
                    ))}

                    {/* Electrolytes special row */}
                    {electrolytesStartIndex !== -1 && (
                      <tr className="border-b border-gray-300">
                        <td className="flex flex-row py-1 break-words border-r border-gray-300 text-gray-700 font-semibold text-center align-middle">
                          <div
                            className="h-auto text-[17px] flex items-center justify-center"
                            style={{
                              writingMode: "vertical-lr",
                              transform: "rotate(180deg)",
                            }}
                          >
                            Electrolytes (mmol/l)
                          </div>
                          <div>
                            {electrolyteRows.map((elec, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between py-2 px-2 rounded text-sm break-words"
                              >
                                <span className="text-gray-700 font-medium">
                                  {elec.key}
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="p-2 border-gray-300 w-full">
                          <div className="flex flex-col space-y-2">
                            {electrolyteRows.map((elec, idx) => (
                              <div
                                key={idx}
                                className="flex justify-end px-2 py-1 rounded text-sm break-words"
                              >
                                {/* <span className="text-gray-700 font-medium">
                              {elec.key}
                            </span> */}
                                <span className="text-gray-600">
                                  {elec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}

                    {/* Remaining rows */}
                    {remainingRows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-gray-200">
                        <td className="p-2 text-left text-gray-700 font-medium w-1/2 border-r border-gray-300 break-words whitespace-normal overflow-hidden">
                          {row.key}
                        </td>
                        <td className="p-2 text-right text-gray-600 w-1/2 break-words whitespace-normal overflow-hidden">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          } 
          
          else {
            // Regular string item
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="inline-block w-3 h-3 bg-[#13275F] mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-700 text-[17px]">{item}</span>
              </motion.li>
            );
          }
        })}
        {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3"
        >
          <FaCircleArrowUp className="text-[40px]" color="#13275F" />
        </motion.button>
      )}
      </>
    );
  };

  return (
    <div>
      <div className="sm:w-[75vw] w-full left-0 p-4 pt-0">
        <nav className="h-[58px] w-full">
          <div className={`flex header ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <div className="flex justify-between items-center w-full">
              <div>
                <div className="text-[40px] relative top-[15px] sm:text-[40px] sm:top-[13px]">
                  <img
                    onClick={() => {
                      setSelectedItem(null);
                      setActiveTab("Features");
                      setSelectedIndex(null);
                    }}
                    src={logo}
                    alt="Logo"
                    className="svg-image w-30"
                  />
                </div>
              </div>
              {/* <div>
                <div
                  className="text-[40px] relative top-[10px] md:hidden"
                  style={{ color: "gray", cursor: "pointer" }}
                >
                  <IoMdMenu color="#0075BC" />
                  
                </div>
                
              </div> */}
              <div>
                {/* Menu Icon */}
                <div
                  className="text-[40px] relative top-[10px] md:hidden"
                  style={{ color: "gray", cursor: "pointer" }}
                  onClick={toggleDrawer}
                >
                  <IoMdMenu color="#0075BC" />
                </div>

                {/* Right Drawer */}
                <div
                  className={`fixed top-0 right-0 h-auto w-64 mt-12 mr-4 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full hidden"
                  }`}
                >
                  {/* List of Brands */}
                  <div className="">
                    {brandArray.map((brand, index) => (
                      <div
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className={`py-2 text-right px-2 border-r-0 border-t-1 ${
                          selectedIndex === index
                            ? "text-white bg-[#13275F]"
                            : "text-gray-500"
                        } border-gray-300  hover:text-blue-600 cursor-pointer select-none`}
                      >
                        {brand.name}
                      </div>
                    ))}
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="fixed inset-0 bg-black opacity-40 z-40"
                    onClick={toggleDrawer}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>

        <h1 className="font-semibold text-[25px] mt-[10px] mb-2 select-none">
          {`${selectedItem !== null ? "Product Information" : "Product List"}`}
        </h1>

        <div className="w-full h-[100vh]">
          {selectedItem === null ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 gap-4 w-full"
            >
              {brandArray.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleItemClick(index)}
                  className={` ${
                    selectedItem === index ? "bg-red-400" : "bg-[#e3f5ff]"
                  } hover:bg-[#13275F] rounded-lg cursor-pointer transition-colors duration-300 p-4`}
                >
                  <div className="p-2 h-16 flex items-center justify-center mx-auto">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-[120px] hover:filter hover:brightness-0 hover:invert"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col"
              ref={containerRef}
            >
              <div className="flex flex-col md:flex-row gap-8 relative">
                {/* Bottle container */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-lg p-2 max-w-md w-full flex flex-col items-center"
                >
                  <img
                    src={brandArray[selectedItem].bottle}
                    alt={`${brandArray[selectedItem].name} Bottle`}
                    className={`${
                      isScrolled ? "opacity-0" : ""
                    } w-full max-h-[180px] object-contain`}
                  />
                  <motion.div
                    className={`${
                      isScrolled
                        ? "fixed top-4 left-4 z-50 p-3 w-[200px]"
                        : "w-[130px] mt-4"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    {isScrolled ? (
                      <img
                        src={brandArray[selectedItem].logo}
                        alt={`${brandArray[selectedItem].logo}`}
                        className="w-full object-contain"
                      />
                    ) : (
                      <img
                        src={brandArray[selectedItem].logo}
                        alt={`${brandArray[selectedItem].logo}`}
                        className="w-full object-contain"
                      />
                    )}
                  </motion.div>
                </motion.div>

                {/* Content area */}
                {/* <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 bg-white rounded-lg"
                >
                  <div className="flex overflow-x-auto border-b border-gray-300">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full py-1 px-3 border-1 border-[#1fa9ff44] whitespace-nowrap transition-all text-xl font-medium ${
                          activeTab === tab
                            ? "bg-[#13275F] text-white"
                            : "bg-[#0075BC] text-gray-300"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 mt-4"
                    >
                      {renderTabContent()}
                    </motion.div>
                  </AnimatePresence>
                </motion.div> */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 bg-white rounded-lg relative"
                >
                  {/* Fixed tabs section (stays below fixed logo) */}
                  {/* <div
                    className={`flex overflow-x-auto border-b border-gray-300 ${
                      isScrolled ? "sticky top-[80px] z-40 bg-white" : ""
                    }`}
                  >
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full py-1 px-3 border-1 border-[#1fa9ff44] whitespace-nowrap transition-all text-xl font-medium ${
                          activeTab === tab
                            ? "bg-[#13275F] text-white"
                            : "bg-[#0075BC] text-gray-300"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div> */}

                  <div
                    className={`${
                      isScrolled ? "sticky top-[80px]" : ""
                    }relative`}
                  >
                    {/* Left Arrow */}
                    {showLeftArrow && (
                      <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 shadow-md cursor-pointer"
                        onClick={() => scrollTabs(-120)}
                      >
                        <IoIosArrowBack size={31} color="black" />
                      </div>
                    )}

                    {/* Scrollable Tabs */}
                    <div
                      ref={tabScrollRef}
                      onScroll={handleTabScroll}
                      className="flex overflow-x-auto border-b border-gray-300 no-scrollbar"
                    >
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`py-1 px-3 border-1 border-[#1fa9ff44] whitespace-nowrap transition-all text-xl font-medium ${
                            activeTab === tab
                              ? "bg-[#13275F] text-white"
                              : "bg-[#0075BC] text-gray-300"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Right Arrow */}
                    {showRightArrow && (
                      <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 shadow-md cursor-pointer"
                        onClick={() => scrollTabs(100)}
                      >
                        <IoIosArrowForward size={31} color="black" />
                      </div>
                    )}
                  </div>

                  {/* Scrollable content area */}
                  <div
                    className={`overflow-y-auto ${
                      isScrolled ? "max-h-[calc(100vh-150px)]" : ""
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 mt-4"
                      >
                        {renderTabContent()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;
