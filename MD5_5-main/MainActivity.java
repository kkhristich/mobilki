package com.example.broadcastmessages;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {
    public static final String ACTION_WHO= "com.example.broadcastmessages.action.ACTIONWHO";

    public static final String MESSAGE = "Проверка отправки";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void sendMessage(View view){
        Intent intent = new Intent();
        intent.setAction(ACTION_WHO);
        intent.putExtra("com.example.broadcastmessages.broadcast.Message", MESSAGE);
        intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
        intent.setComponent(new ComponentName(this, MessageReceiver.class));
        sendBroadcast(intent);


    }
}