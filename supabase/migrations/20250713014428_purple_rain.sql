/*
  # Création de la table des messages communautaires

  1. Nouvelles Tables
    - `community_messages`
      - `id` (uuid, clé primaire)
      - `author` (text, nom de l'auteur)
      - `content` (text, contenu du message)
      - `created_at` (timestamp, date de création)

  2. Sécurité
    - Activer RLS sur la table `community_messages`
    - Ajouter une politique pour permettre à tous de lire les messages
    - Ajouter une politique pour permettre à tous d'insérer des messages
*/

CREATE TABLE IF NOT EXISTS community_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE community_messages ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre à tous de lire les messages
CREATE POLICY "Anyone can read community messages"
  ON community_messages
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Politique pour permettre à tous d'insérer des messages
CREATE POLICY "Anyone can insert community messages"
  ON community_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);