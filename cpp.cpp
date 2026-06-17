#include<iostream.h>
#include<conio.h>
int main()
{
    clrscr();
    int a,b,c;
    cout<<"enter the value of a:-";cin>>a;
    cout<<"enter the value of b:-";cin>>b;
    cout<<"enter the value of c:-";cin>>c;

    if(a>=b && a>=c)
    {
        cout<<"a is greatest value ";
    }
    else if (b>=a && b>=c)
    {
        cout<<"b is greatest value";
    }
    else
    {
        cout<<"c is greatest value ";

    }
    getch();
    return 0;

}
