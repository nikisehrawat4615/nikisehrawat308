#include<stdio.h>
#include<conio.h>
void towerOfHanoi(int n,charfrom_rod,charto_rod,charaux_rod)
{
 if (n == 1)
 {
   printf("\n Move disk 1 from rod %c to rod %c", from_rod,to_rod);
   return;
 }
   towerOfHanoi(n-1 from_rod,aux_rod,to_rod);
   printf("\nMove disk %d from_rod %c to_rod %c",n,from_rod,to_rod);
   towerOfHanoi(n-1 aux_rod,to_rod,from_rod);
   }
   int main()
   {
   int n =4;
   towerOfHanoi(n,'A','C','B');
   return 0;
   }




