export default function numberToMoney(accountBallance) {
  return accountBallance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}