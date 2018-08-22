<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=2, max=255, minMessage="Le titre doit faire minimum 2 caractères", maxMessage="Le titre doit faire au maximum 255 caractères")
     * @Assert\NotNull(message="Le titre est obligatoire")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Assert\Length(min=10, minMessage="Le contenu doit faire minimum 10 caractères")
     * @Assert\NotNull(message="La description est obligatoire")
     */
    private $description;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotNull()
     */
    private $release_date;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $avg_rate;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $ratings_nb;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=2, minMessage="Le nom du studio doit faire minimum 2 caractères")
     * @Assert\NotNull(message="Le studio ou nom du développeur est obligatoire")
     */
    private $studio;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Url()
     * @Assert\NotNull()
     */
    private $img_path;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="game_id", orphanRemoval=true)
     */
    private $comments;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getRelease_Date(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setRelease_Date(\DateTimeInterface $release_date): self
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setReleaseDate(\DateTimeInterface $release_date): self
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getAvgRate(): ?float
    {
        return $this->avg_rate;
    }

    public function setAvgRate(?float $avg_rate): self
    {
        $this->avg_rate = $avg_rate;

        return $this;
    }

    public function getRatingsNb(): ?int
    {
        return $this->ratings_nb;
    }

    public function setRatingsNb(?int $ratings_nb): self
    {
        $this->ratings_nb = $ratings_nb;

        return $this;
    }

    public function getStudio(): ?string
    {
        return $this->studio;
    }

    public function setStudio(string $studio): self
    {
        $this->studio = $studio;

        return $this;
    }

    public function getImg_Path(): ?string
    {
        return $this->img_path;
    }

    public function setImg_Path(string $img_path): self
    {
        $this->img_path = $img_path;

        return $this;
    }

    public function getImgPath(): ?string
    {
        return $this->img_path;
    }

    public function setImgPath(string $img_path): self
    {
        $this->img_path = $img_path;

        return $this;
    }

    /**
     * @return Collection|Comments[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setGameId($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getGameId() === $this) {
                $comment->setGameId(null);
            }
        }

        return $this;
    }
}
