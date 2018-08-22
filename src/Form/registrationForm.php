<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\EqualTo;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Validator\Constraints\AbstractComparison;

class registrationForm extends AbstractType 
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $randomIntOne = rand(0, 20);
        $randomIntTwo = rand(0,20);
        $randomInt = [ $randomIntOne, $randomIntTwo ];
        $builder
            ->add('_name',TextType::class, [
                'label' => 'Pseudo',
                'required' => true,
                'constraints' => [
                    new Length( [
                    'min' => 3,
                    'max' => 20,
                    'minMessage' => 'Le nom d\'utilisateur doit comporter au moins 3 caractères',
                    'maxMessage' => 'Le nom d\'utilisateur ne peut comporter plus de 20 caractères'
                ]),
                    new NotBlank( [ 
                        'message' => 'Le nom d\'utilisateur est obligatoire'
                    ])
                ],
            ])
            ->add('_email', EmailType::class, [
                'label' => 'E-mail',
                'required' => true,
                'constraints' => [
                    new Email ( [
                        'message' => 'Veuillez entrer une adresse email valide (ex: monadresse@exemple.com)'
                ]),
                    new NotBlank ( [
                        'message' => 'L\'adresse e-mail est obligatoire'
                    ])
                ]
            ])
            ->add('_password', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => ['label' => 'Mot de passe'],
                'second_options' => ['label' => 'Confirmation du mot de passe'],
                'required' => true,
                'constraints' => [
                    new Length ( [
                        'min' => 8,
                        'max' => 50,
                        'minMessage' => 'Votre mot de passe doit comporter au moins 8 caractères',
                        'maxMessage' => 'Votre mot de passe ne peut comporter plus de 50 caractères'
                ]),
                    new NotBlank ( [
                        'message' => 'Le mot de passe est obligatoire'
                    ])
                ]
            ])
            ->add('_captcha',TextType::class, [
                'label' => $randomIntOne .' + '. $randomIntTwo . ' = ',
                'required' => true,
                'constraints' => [
                    new EqualTo ([
                        'value' => $randomIntOne + $randomIntTwo,
                        'message' => 'Veuillez donner le bon résultat de l\'opération'
                    ])
                ]     
            ])
            ->add('submit', SubmitType::class)
            ->getForm();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            
        ]);
    }
}