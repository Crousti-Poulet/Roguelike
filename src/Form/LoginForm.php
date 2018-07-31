<?php

namespace App\Form;

use App\Form\LoginForm;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class LoginForm extends AbstractType
{

  public function buildForm(FormbuilderInterface $builder, array $options)
  {
    $builder
      ->add('username', TextType::class, ['label' => 'Nom d\'utilisateur'])
      ->add('password', PasswordType::class, ['label' => 'Mot de passe'])
    ;
  }

  public function configureOptions(OptionsResolver $resolver)
  {
    
  }
  
}