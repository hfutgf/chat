const fullNames: string[] = [
  "John Evans",
  "Jane Smith",
  "Toxtasin Eshonqulov",
  "Shahram Giyasov",
  "Isroil Madrimov",
  "Cristiano Ronaldo",
  "Leo Messi",
  "Baxodir Jalolov",
  "Khabib Nurmagomedov",
  "Conor McGregor",
];

export function getRandomFullName(): string {
  const randomIndex = Math.floor(Math.random() * 10);
  return fullNames[randomIndex];
}
