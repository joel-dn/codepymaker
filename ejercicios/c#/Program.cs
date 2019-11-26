using System;

namespace traduccion_de_lenguajes_N1
{
    class Program
    {
        static void Main(string[] args)
        {
            int numero = int.Parse(Console.ReadLine());
            if (numero % 4 == 0 && numero % 100 != 0 || numero % 400 == 0)
            {
                Console.WriteLine("Si");
            }
            else
            {
                Console.WriteLine("No");
            }
        }
    }
}
/* este codigo es el de bisiesto de smog;
 * numero = int(input()
 * if numero % 4 == 0 and numero % 100 !=0 or numero % 400 == 0:
 *  print("Si")
 * else:
 *  print("No")
 *  */
