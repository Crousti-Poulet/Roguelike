<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class addGameForm extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
            ->add('title', TextType::class, [
              'label' => 'Titre',
              'required' => true,
              'constraints' => [
                new NotBlank([
                  'message' => `Le titre du jeu est obligatoire`
                ])
              ]
            ])
            ->add('description', TextareaType::class, [
              'label' => 'Description',
              'required' => true,
              'constraints' => [
                new NotBlank([
                  'message' => `La description du jeu est obligatoire`
                ])
              ]
            ])
            ->add('studio', TextType::class, [
              'label' => 'Studio de développement',
              'required' => true,
              'constraints' => [
                new Length([
                  'max' => 120,
                  'maxMessage' => `Maximum 120 caractères`
                ]),
                new NotBlank([
                  'message' => 'le studio est obligatoire'
                ])
              ]
            ])
            ->add('release_date', DateType::class, [
              'label' => 'Date de sortie',
              'required' => true,
              'widget' => 'single_text',
              'format' => 'yyyy',
              'help' => 'L\'année de sortie doit être au format AAAA',
              'constraints' => [
                new NotBlank([
                  'message' => 'La date de sortie est obligatoire'
                ])
              ]
            ])
            ->add('submit', SubmitType::class)
            ->getForm();
  }
}