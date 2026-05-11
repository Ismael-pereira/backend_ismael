#include <stdio.h>

int main() {
    char operacao;
    double n1, n2, resultado;

    printf("--- CALCULADORA ---\n");
    printf("Escolha a operacao (+, -, *, /): ");
    scanf(" %c", &operacao); 
    
    printf("Digite o primeiro numero: ");
    scanf("%lf", &n1);
    printf("Digite o segundo numero: ");
    scanf("%lf", &n2);

    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            printf("%.2lf + %.2lf = %.2lf\n", n1, n2, resultado);
            break;
        case '-':
            resultado = n1 - n2;
            printf("%.2lf - %.2lf = %.2lf\n", n1, n2, resultado);
            break;
        case '*':
            resultado = n1 * n2;
            printf("%.2lf * %.2lf = %.2lf\n", n1, n2, resultado);
            break;
        case '/':
            if (n2 != 0) {
                resultado = n1 / n2;
                printf("%.2lf / %.2lf = %.2lf\n", n1, n2, resultado);
            } else {
                printf("Erro Divisao por zero nao e permitida.\n");
            }
            break;
        default:
            printf("Operacao invalida\n");
    }

    return 0;
}
