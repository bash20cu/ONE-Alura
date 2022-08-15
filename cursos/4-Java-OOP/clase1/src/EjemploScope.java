public class EjemploScope {
  public static void main(String[] args) {
    int numero1 = 5;
    int numero2 = 9;
    System.out.println(numero2);
    if (numero1 > numero2) {
      System.out.println("El numero 1 es mayor que el numero 2");
    } else {
      System.out.println("El numero 2 es mayor que el numero 1");
    }
  }
}
