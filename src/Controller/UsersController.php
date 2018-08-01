<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\registrationForm;
use App\Controller\UsersController;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

Class UsersController extends Controller
{
    /** @Route
     * ("/account", name="createAccount") 
     */
    public function createAccountAction(request $request, ObjectManager $manager)
    {
        $form = $this->createForm(registrationForm::class);
       
        if(!empty($_POST)) {
            
            // dump($request->get('registration_form')['_password']['first']);
            // die();

            $form->handleRequest($request);

            if($form->isSubmitted() && $form->isValid()) {
                // vérifier que le nom d'utilisateur ou l'adresse email n'est pas déjà enregistré (sinon exception non gérée)
                $userExists = $manager->getRepository(Users::class)->findOneBy([
                    'name' => $request->get('registration_form')['_name']
                ]); 

                $emailExists = $manager->getRepository(Users::class)->findOneBy([
                    'email' => $request->get('registration_form')['_email']
                ]);

                if($userExists != null) {

                    $this->addFlash('error', 'Ce nom d\'utilisateur est déjà utilisé');
                }
                else if ($emailExists != null) {

                    $this->addFlash('error', 'Cette adresse email est déjà utilisée');   
                } 
                else if ($emailExists === null && $userExists === null) {

                    $user = new Users();
                    $user->setCreatedAt(new \DateTime());
                    $user->setName($request->get('registration_form')['_name']);
                    $user->setEmail($request->get('registration_form')['_email']);
                    $user->setPassword($request->get('registration_form')['_password']['first']);
                    
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($user);
                    $em->flush();

                    // $form->handleRequest($request);

                }
            }
        }

        return $this->render('UsersPages/createAccount.html.twig', [
            'registrationForm' => $form->createView()
        ]);
    }
}