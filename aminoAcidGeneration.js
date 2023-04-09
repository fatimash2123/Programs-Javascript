//the input_sequence is the sequence on which the process has to happen 
input_sequence=`CGACCGCTAATGAGCAAGTTCCTCCTCCAGAGCCACTCCGCCAACGCCTGCCTGCTCACCCTTCTGCTCACGCTGGCCTCCAACCTCGACATATCCCTGGCCAACTTCGAGCACTCGTGCAACGGCTACATGCGGCCCCACCCGCGGGGTCCCAACCTGTTGAGCAGCTCTCTGGGGGGCAACAGGAGGTAACTGGCCA`
console.log("input sequence is")
console.log(input_sequence)

//complementary sequence is made here
complementary_sequence=""
for (i=0; i<input_sequence.length;i++){
  // input sequence has C replace it with G in complementary sequence
  if(input_sequence.charAt(i)==="C"){
    complementary_sequence=complementary_sequence.concat("G")
  }
  // input sequence has G replace it with C in complementary sequence
  else if(input_sequence.charAt(i)==="G"){
    complementary_sequence=complementary_sequence.concat("C")
  }
  // input sequence has A replace it with T in complementary sequence
  else if(input_sequence.charAt(i)==="A"){
    complementary_sequence=complementary_sequence.concat("T")
  }
  // input sequence has T replace it with A in complementary sequence
  else if(input_sequence.charAt(i)==="T"){
    complementary_sequence=complementary_sequence.concat("A")
  }
}
console.log("complementary sequence is")
console.log(complementary_sequence)


//rna sequence is made here
rna_sequence=input_sequence.replaceAll("T","U")
console.log("rna sequence is")
console.log(rna_sequence)

//sequence of amino acid coded by the strand 
aminoAcids=[
{"UUU":"Phe"},{"UUC":"Phe"},{"UUA":"Leu"},{"UUG":"Leu"},
{"CUU":"Leu"},{"CUC":"Leu"},{"CUA":"Leu"},{"CUG":"Leu"},
{"AUU":"IIe"},{"AUC":"IIe"},{"AUA":"Met"},{"AUG":"Met"},
{"GUU":"Val"},{"GUC":"Val"},{"GUA":"Val"},{"GUG":"Val"},
{"UCU":"Ser"},{"UCC":"Ser"},{"UCA":"Ser"},{"UCG":"Ser"},
{"CCU":"Pro"},{"CCC":"Pro"},{"CCA":"Pro"},{"CCG":"Pro"},
{"ACU":"Thr"},{"ACC":"Thr"},{"ACA":"Thr"},{"ACG":"Thr"},
{"GCU":"Ala"},{"GCC":"Ala"},{"GCA":"Ala"},{"GCG":"Ala"},
{"UAU":"Tyr"},{"UAC":"Tyr"},
{"CAU":"His"},{"CAC":"His"},{"CAA":"Gin"},{"CAG":"Gin"},
{"AAU":"Asn"},{"AAC":"Asn"},{"AAA":"Lys"},{"AAG":"Lys"},
{"GAU":"Asp"},{"GAC":"Asp"},{"GAA":"Glu"},{"GAG":"Glu"},
{"UGU":"Cys"},{"UGC":"Cys"},{"UGG":"Trp"},
{"CGU":"Arg"},{"CGC":"Arg"},{"CGA":"Arg"},{"CGG":"Arg"},
{"AGU":"Ser"},{"AGC":"Ser"},{"AGA":"Arg"},{"AGG":"Arg"},
{"GGU":"Gly"},{"GGC":"Gly"},{"GGA":"Gly"},{"GGG":"Gly"},
]
//get the index of starting codon AUG
startingIndex=rna_sequence.indexOf("AUG")
aminoAcid_sequence=""
console.log(`starting codon is at index ${startingIndex}`)
for(i=startingIndex; i<rna_sequence.length;i+=3){
  codon=`${rna_sequence[i]}${rna_sequence[i+1]}${rna_sequence[i+2]}`
  //if the codon is not the stoping one then add amino acid for it
  if(codon!=="UAA" || codon!=="UAG" || codon!=="UGA"){
    amino=aminoAcids.filter(val=>{if((Object.keys(val)[0])===codon){return Object.values(val) }})
    
    if(amino[0]!=undefined){
      name=`${amino[0][codon]} `
      aminoAcid_sequence=aminoAcid_sequence.concat(name)
    }
  }
  else{
    aminoAcid_sequence=aminoAcid_sequence.concat("STOP ")
    break;
  }
  }
  console.log("amino acid sequence is")
  console.log(aminoAcid_sequence)
  

