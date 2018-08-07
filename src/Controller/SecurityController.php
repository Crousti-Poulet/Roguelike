<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\LoginForm;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends Controller
{
  
  /************LOGIN************/
  /**
   * @Route("/login", name="login")
   */
  public function login(Request $request, AuthenticationUtils $utils)
  {
    $error = $utils->getLastAuthenticationError();
    $lastUsername = $utils->getLastUsername();

    //Si il n'y a pas d'erreur en flash alors on ajoute un flash 'success'
    if(!isset($error)) {
      $this->addFlash('success', 'Authentification réussie');
    }

    return $this->render('UsersPages/login.html.twig', [
      'error'     => $error,
      'last_username' => $lastUsername
      ]);
  }

  /************LOGOUT************/
  /**
  * @Route("/logout", name="logout")
  */
  public function logout(Request $request) 
  {

  }

}


