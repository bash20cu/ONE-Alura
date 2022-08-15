public class EjemploCiclos {
  public static void main(String[] args) {
    
    int contador = 0;

    while (contador < 10) 
    {
      System.out.print(contador + " ");
      contador++;
    }

    System.out.println(" ");
    
    for (int i = 0; i < 10; i++) 
    {
      System.out.print(i + " ");
    }

    System.out.println(" ");
    
    for ( int f=0; f<10;f++)
    {
      for ( int c=0; c<10; c++)
      {
        if(c>f)
        {
          break;
        }
        System.out.print("*");
        System.out.print(" ");
      }
      System.out.println(" ");
    }
  }
}
