// 7 kyu
// Complementary DNA
// JavaScript:

// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA; you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  return dna
    .split("")
    .map((nucleotide) => {
      switch (nucleotide) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "C":
          return "G";
        case "G":
          return "C";
          break;
        default:
          return "";
      }
    })
    .join("");
}
