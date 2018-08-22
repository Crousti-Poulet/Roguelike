<?php

namespace App\Controller;

use App\Entity\Game;
use App\Form\GameType;
use App\Form\addGameForm;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class GameController extends Controller
{
  /**
   * @Route("/game/new", name="new_game")
   * @Route("/game/{id}/edit", name="edit_game")
   */
  public function formGame(Game $game = null, Request $request, ObjectManager $manager)
  {

    if(!$game) {
      $game = new Game();
    }

    $form = $this->createForm(GameType::class, $game);

    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()) {
      $manager->persist($game);
      $manager->flush();
      return $this->redirectToRoute('game_show', ['id' => $game->getId()]);
    }

    return $this->render('GamePages/formGame.html.twig', [
      'formGame' => $form->createView(),
      'editMode' => $game->getId() !== null
    ]);
  }

  /**
   * @Route("game/index", name="all_games")
   */
  public function index()
  {
    $repo = $this->getDoctrine()->getRepository(Game::class);

    $games = $repo->findAll();

    return $this->render('GamePages/game_index.html.twig', [
      'games' => $games
    ]);
  }


  /**
   * @Route("/game/{id}", name="game_show")
   */
  public function show($id)
  {

    $repo = $this->getDoctrine()->getRepository(Game::class);

    $game = $repo->find($id);

    return $this->render('GamePages/game_show.html.twig', [
      'game' => $game
    ]);
  }
}