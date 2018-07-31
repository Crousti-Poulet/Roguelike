<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\registrationForm;
use App\Controller\UsersController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

Class UsersController extends Controller
{
    /** @Route
     * ("/account", name="createAccount") 
     */
    public function createAccountAction(request $request)
    {
        $form = $this->createForm(registrationForm::class);
       
        if(!empty($_POST)) {
            
            // dump($request);
            // die();

            $user = new Users();
            $user->setCreatedAt(new \DateTime());
            $user->setName($request->get('registration_form')['_name']);
            $user->setEmail($request->get('registration_form')['_email']);
            $user->setPassword($request->get('registration_form')['_password']);
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
        }

        return $this->render('UsersPages/createAccount.html.twig', [
            'registrationForm' => $form->createView()
        ]);
        
    }
}