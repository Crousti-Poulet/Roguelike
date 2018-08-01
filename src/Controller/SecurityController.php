<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\LoginForm;
use App\Repository\UsersRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SecurityController extends Controller
{
  
  /************LOGIN************/
  /**
   * @Route("/login", name="login")
   */
  public function login(Request $request)
  {
    //Creating the login form
    $form = $this->createForm(LoginForm::class);

    if($_POST) {

      $username = $request->get('login_form')['username'];
      $password = $request->get('login_form')['password'];
      $session = $request->getSession();
      $errors = [];

      if(!$this->getDoctrine()->getRepository(Users::class)->findOneByName($username)) {
        //User does not exist -> adding flash error
        $this->addFlash('error', 'Nom d\'utilisateur ou mot de passe incorrect');
        $errors[] = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
  

      //If no error => set $_SESSION['id'] & $_SESSION['username']

      if (empty($errors)) {     
        //$session->start();
        $session->set('name', $username);
        $this->addFlash('success', 'Connexion réussie');
        return $this->redirectToRoute('homePage');
      }
      
    }

    //Checking the existence of this user in DB

    return $this->render('UsersPages/login.html.twig', ['loginForm' => $form->createView()]);
  }

  /************LOGOUT************/
  /**
  * @Route("/logout", name="logout")
  */
    public function logout(Request $request) 
    {
    $session = $request->getSession();
    $session->clear();
    return $this->redirectToRoute('homePage');
  }

}


