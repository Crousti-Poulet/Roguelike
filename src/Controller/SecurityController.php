<?php

namespace App\Controller;

use App\Form\LoginForm;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SecurityController extends Controller
{
  
  /************LOGIN************/
  /**
   * @Route("/login", name="login")
   */
  public function login()
  {
    $form = $this->createForm(LoginForm::class);
    return $this->render('UsersPages/login.html.twig', ['loginForm' => $form->createView()]);
  }
}